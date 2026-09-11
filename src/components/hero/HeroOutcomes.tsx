const outcomes = [
  {
    title: 'Bệ phóng sự nghiệp từ sớm',
    description:
      'Trang bị kiến thức nền tảng và kỹ năng thực hành AI đa lĩnh vực, giúp học sinh khám phá nhiều hướng ứng dụng như Công nghệ, Data, Marketing, Giáo dục, Sáng tạo, Kinh doanh... Qua các dự án và workshop thực tế, học sinh từng bước phát triển năng lực chuyên môn, xác định thế mạnh và định hướng nghề nghiệp từ sớm, tạo nền tảng cho các cơ hội học tập, nghiên cứu và thực tập trong lĩnh vực công nghệ.',
  },
  {
    title: 'Hồ sơ năng lực thực chiến (Portfolio)',
    description:
      'Học sinh vừa xây dựng nền tảng kiến thức AI vững chắc, vừa chuyển hóa kiến thức thành các sản phẩm có tính ứng dụng cao qua từng workshop. Sản phẩm được phát triển đa dạng trong nhiều lĩnh vực như Công nghệ, Data, Marketing, Giáo dục, Kinh doanh và Sáng tạo, từ AI Content, AI Video, Study Bot, Data Analysis đến Web/App và AI Agent. Qua đó, học sinh từng bước hình thành Portfolio cá nhân, thể hiện rõ năng lực ứng dụng AI và định hướng chuyên môn.',
  },
  {
    title: 'Tư duy dự án & Nghiên cứu thực tế',
    description:
      'Học sinh được rèn luyện tư duy giải quyết vấn đề và quy trình phát triển dự án công nghệ, từ xác định bài toán, xây dựng giải pháp, làm việc nhóm, thử nghiệm đến đánh giá và hoàn thiện sản phẩm. Đồng thời, chương trình mở rộng cơ hội tiếp cận tư duy nghiên cứu và các bài toán AI thực tiễn, tạo nền tảng để học sinh tiếp tục phát triển theo hướng nghiên cứu, kỹ thuật hoặc xây dựng sản phẩm.',
  },
]

export default function HeroOutcomes() {
  return (
    <div className="mt-8 sm:mt-10">
      <h2 className="text-sm font-extrabold uppercase tracking-wide text-primary-dark sm:text-base">
        Đầu ra toàn khoá
      </h2>

      <ul className="mt-4 space-y-4 sm:mt-5 sm:space-y-5">
        {outcomes.map((item, index) => (
          <li key={item.title} className="flex gap-3 sm:gap-4">
            <span
              className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-hero-navy text-xs font-bold text-white"
              aria-hidden
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <h3 className="text-sm font-bold text-gray-900 sm:text-base">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-gray-600">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
