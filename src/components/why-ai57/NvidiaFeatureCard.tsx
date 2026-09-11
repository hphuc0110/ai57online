export default function NvidiaFeatureCard() {
  return (
    <div className="overflow-hidden rounded-[20px] bg-[#76b900] shadow-xl">
      <div className="grid items-center gap-6 p-5 sm:gap-8 sm:p-8 md:grid-cols-2 md:p-10">
        <div>
          <h3 className="text-xl font-extrabold text-white sm:text-2xl md:text-3xl">
            Tại sao AI57 tiếp cận chuẩn NVIDIA?
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-white/95 md:text-base">
            NVIDIA đang dẫn đầu trong cuộc đua công nghệ AI toàn cầu, đóng vai trò quan trọng trong
            hệ sinh thái GPU, hạ tầng tính toán và phát triển các mô hình AI hiện đại. Trong bối
            cảnh đó, việc AI57 được NVIDIA bảo trợ là một bước ngoặt quan trọng trong
            định hướng đào tạo AI theo chuẩn quốc tế.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/95 md:text-base">
            Giáo trình AI57 được xây dựng bám sát định hướng đào tạo của NVIDIA Deep
            Learning Institute (DLI), chú trọng học đi đôi với hành, thực hành trên bài toán thực tế
            và phát triển sản phẩm thay vì chỉ học lý thuyết hay sử dụng công cụ AI.
          </p>
          <p className="mt-4 text-sm font-semibold italic text-white md:text-base">
            Tiếp cận công nghệ dẫn đầu – học theo định hướng quốc tế – xây dựng năng lực AI từ sớm.
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="overflow-hidden rounded-xl border-4 border-primary-light bg-white p-1 shadow-2xl">
            <img
              src="/why/nvidia.png"
              alt="Tòa nhà NVIDIA"
              className="h-44 w-full rounded-lg object-cover md:h-48 md:w-72"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
