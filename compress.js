import ffmpeg from 'fluent-ffmpeg';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Đường dẫn file gốc và file xuất ra
const inputPath = path.join(__dirname, 'public', 'videos', 'hero-video-original.mp4');
const outputPath = path.join(__dirname, 'public', 'videos', 'hero-video.mp4');

console.log('Đang chuẩn bị nén video, vui lòng đợi...');

ffmpeg(inputPath)
  .noAudio()                   // Tắt tiếng
  .videoCodec('libx264')       // Chuẩn nén H.264
  .size('1280x720')            // Giảm độ phân giải xuống HD 720p
  .videoBitrate('1000k')       // Chỉnh bitrate
  .outputOptions([
    '-preset fast',
    '-movflags faststart'
  ])
  .on('progress', (progress) => {
    if (progress.percent) console.log(`Đang xử lý: ${Math.round(progress.percent)}%`);
  })
  .on('end', () => {
    console.log('\nNén video thành công! File mới đã được lưu tại:', outputPath);
    console.log('Bây giờ bạn có thể xóa file hero-video-original.mp4 đi và push lên Git.');
  })
  .on('error', (err) => {
    console.error('Đã xảy ra lỗi trong quá trình nén:', err.message);
  })
  .save(outputPath);