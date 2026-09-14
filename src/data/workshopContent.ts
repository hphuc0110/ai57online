export interface WorkshopContent {
  moduleNumber: number
  wsCode: string
  title: string
  items: string[]
}

export const workshopContents: WorkshopContent[] = [
  // Module 1
  {
    moduleNumber: 1,
    wsCode: 'WS1',
    title: 'PROMPT LAB: Hệ điều hành học tập cá nhân bằng AI',
    items: [
      'Học cách viết prompt rõ ràng, có cấu trúc và cải thiện prompt qua từng version.',
      'So sánh kết quả của cùng một prompt trên nhiều mô hình AI để chọn công cụ phù hợp.',
      'Thực hành các kỹ thuật prompt nâng cao và nhận biết các rủi ro như prompt injection.',
      'Sử dụng NotebookLM, Perplexity để học và tìm kiếm thông tin dựa trên tài liệu có trích dẫn nguồn.',
      'Xây dựng Study OS cá nhân để quản lý ghi chú, công việc, lịch học, kỳ thi và mục tiêu học tập.',
    ],
  },
  {
    moduleNumber: 1,
    wsCode: 'WS2',
    title: 'AI CREATIVE STUDIO: Sản xuất ảnh và video bằng GenAI',
    items: [
      'Học cách viết prompt để tạo ảnh AI theo đúng ý tưởng.',
      'Thực hành tạo cùng một hình ảnh trên nhiều nền tảng AI, sau đó so sánh kết quả để chọn công cụ cho chất lượng phù hợp nhất.',
      'Thực hành thiết kế poster và xây dựng các yếu tố nhận diện cơ bản như màu sắc, hình ảnh và phong cách trình bày cho một chiến dịch.',
      'Thực hành tạo video từ văn bản hoặc từ hình ảnh.',
      'Ghép cảnh, làm storyboard, chỉnh sửa video và hoàn thiện Campaign Kit.',
      'Kiểm tra bản quyền, điều khoản sử dụng và cách ghi nhận nội dung do AI tạo ra.',
    ],
  },
  {
    moduleNumber: 1,
    wsCode: 'WS3',
    title: 'AI BUILDER: Generative UI, tác tử và dự án AI for Good',
    items: [
      'Chọn một vấn đề thực tế và xây dựng ý tưởng dùng AI để hỗ trợ giải quyết vấn đề đó.',
      'Dùng prompt để tạo giao diện (UI) và chỉnh sửa giao diện theo yêu cầu cụ thể.',
      'Học cách mô tả rõ giao diện của sản phẩm, các chức năng trên từng màn hình và trình tự người dùng thao tác từ đầu đến cuối.',
      'Xây dựng quy trình tự động có AI và kết nối với các công cụ bên ngoài.',
      'Nhận diện các rủi ro như rò rỉ dữ liệu, prompt injection và đề xuất cách giảm thiểu.',
      'Hoàn thiện nguyên mẫu AI for Good, thử nghiệm với người dùng và trình bày sản phẩm cuối khóa.',
    ],
  },
  {
    moduleNumber: 1,
    wsCode: 'ADV1',
    title: 'Vibe Coding',
    items: [
      'Hiểu tư duy Vibe Coding: mô tả ý tưởng bằng ngôn ngữ tự nhiên và để AI hỗ trợ viết code.',
      'Thiết lập môi trường làm việc và quy trình prompt → code → chạy thử.',
      'Xây dựng prototype nhanh, lặp cải tiến và dùng AI để debug.',
      'Hoàn thiện sản phẩm nhỏ và trình bày demo rõ ràng.',
      'Đóng gói tài liệu bàn giao và reflection hướng mở rộng sản phẩm.',
    ],
  },
  {
    moduleNumber: 1,
    wsCode: 'ADV2',
    title: 'AI tạo film',
    items: [
      'Xây dựng ý tưởng, kịch bản và storyboard cho film ngắn với sự hỗ trợ của AI.',
      'Tạo nhân vật, bối cảnh và hình ảnh nhất quán xuyên suốt các cảnh.',
      'Thực hành text-to-video / image-to-video và quản lý thông số sinh.',
      'Dựng phim, bổ sung âm thanh và xuất bản kèm kiểm tra bản quyền.',
      'Hoàn thiện bản phát hành cuối và đưa film vào portfolio cá nhân.',
    ],
  },
  {
    moduleNumber: 1,
    wsCode: 'ADV3',
    title: 'Workflow Agent',
    items: [
      'Thiết kế luồng agent: mục tiêu, công cụ, vòng lặp quyết định và đầu ra.',
      'Nối các công cụ no-code/low-code để tự động hoá quy trình thực tế.',
      'Xử lý lỗi, giám sát và thiết lập quy tắc an toàn khi agent chạy.',
      'Tối ưu workflow và bàn giao hệ thống có thể vận hành được.',
      'Xây runbook vận hành và kế hoạch mở rộng workflow.',
    ],
  },
  {
    moduleNumber: 1,
    wsCode: 'ADV4',
    title: 'Claude Co-work',
    items: [
      'Thiết lập quy trình làm việc cùng Claude: phân vai, checklist và chuẩn đầu ra.',
      'Tổ chức Projects, artifacts và ngữ cảnh tài liệu để Claude hỗ trợ hiệu quả.',
      'Thực hành phân tích, viết và lập kế hoạch đa bước với Claude.',
      'Chuẩn hoá template co-work để tái sử dụng cho nhóm hoặc dự án cá nhân.',
      'Hoàn thiện team playbook và checklist bàn giao dự án co-work.',
    ],
  },

  // Module 2
  {
    moduleNumber: 2,
    wsCode: 'WS1',
    title: 'PYTHON FUNDAMENTALS',
    items: [
      'Làm quen với Google Colab và cách chạy một notebook Python.',
      'Thực hành cách khai báo và sử dụng biến, kiểu dữ liệu, chuỗi ký tự và các cấu trúc dữ liệu cơ bản trong Python.',
      'Sử dụng câu lệnh điều kiện và vòng lặp trong Python để kiểm tra, xử lý và lặp lại các bước khi giải những bài toán đơn giản.',
      'Học cách viết hàm, chia nhỏ bài toán và sửa các lỗi code thường gặp.',
      'Hoàn thiện một Python Starter Notebook với các bài tập và mini challenge.',
    ],
  },
  {
    moduleNumber: 2,
    wsCode: 'WS2',
    title: 'PYTHON FOR DATA ANALYSIS',
    items: [
      'Làm quen với NumPy và cách tính toán trên dữ liệu dạng mảng.',
      'Sử dụng pandas để đọc, kiểm tra và làm việc với dữ liệu dạng bảng.',
      'Thực hành lọc, sắp xếp, truy vấn và tổng hợp dữ liệu.',
      'Làm sạch dữ liệu: xử lý dữ liệu thiếu, dữ liệu trùng và sai kiểu dữ liệu.',
      'Tạo thêm các đặc trưng mới và chuẩn bị bộ dữ liệu sạch cho EDA và Machine Learning.',
    ],
  },
  {
    moduleNumber: 2,
    wsCode: 'WS3',
    title: 'DATA EXPLORATION & VISUALIZATION',
    items: [
      'Học cách đọc và hiểu các chỉ số thống kê cơ bản như giá trị trung bình, trung vị và độ lệch chuẩn để biết dữ liệu phân bố và thay đổi như thế nào.',
      'Vẽ các biểu đồ phổ biến bằng Matplotlib để mô tả dữ liệu.',
      'Tìm mối quan hệ giữa các biến và nhận diện các điểm dữ liệu bất thường.',
      'Thực hiện từng bước khám phá dữ liệu (EDA): đặt câu hỏi, kiểm tra dữ liệu, tạo biểu đồ và rút ra những nhận xét quan trọng từ kết quả phân tích.',
      'Hoàn thiện EDA Report với các biểu đồ và phát hiện chính từ dữ liệu.',
    ],
  },
  {
    moduleNumber: 2,
    wsCode: 'WS4',
    title: 'Advanced Data Pipeline & Feature Engineering',
    items: [
      'Phân biệt Supervised Learning, Unsupervised Learning và Reinforcement Learning.',
      'Xác định feature, target và loại bài toán Machine Learning cần giải quyết.',
      'Chia dữ liệu thành hai phần: một phần để mô hình học (train) và một phần để kiểm tra kết quả (test), sau đó chạy một mô hình cơ bản làm mốc so sánh.',
      'Hiểu vòng đời của một dự án Machine Learning và cách xây dựng pipeline cơ bản.',
      'Chọn metric phù hợp và nhận biết tình trạng overfitting hoặc underfitting.',
    ],
  },
  {
    moduleNumber: 2,
    wsCode: 'WS5',
    title: 'Advanced Supervised Learning & Model Optimization',
    items: [
      'Thực hành các mô hình kNN và Naive Bayes trên dữ liệu mẫu.',
      'Xây dựng mô hình Linear Regression và Logistic Regression.',
      'Thực hành Decision Tree, Random Forest và Gradient Boosting.',
      'Đọc các metric và thử thay đổi tham số để quan sát chất lượng mô hình.',
      'So sánh nhiều mô hình trên cùng một bộ dữ liệu và chọn mô hình phù hợp.',
    ],
  },
  {
    moduleNumber: 2,
    wsCode: 'WS6',
    title: 'Advanced Unsupervised & Anomaly Analytics',
    items: [
      'Dùng K-Means để chia dữ liệu khách hàng thành các nhóm.',
      'Thử nhiều giá trị K và lựa chọn số cụm phù hợp.',
      'Sử dụng PCA để giảm chiều và trực quan hóa các cụm dữ liệu.',
      'Dùng Isolation Forest để phát hiện dữ liệu bất thường.',
      'Liên hệ phát hiện bất thường với các bài toán như Predictive Maintenance.',
    ],
  },
  {
    moduleNumber: 2,
    wsCode: 'WS7',
    title: 'Advanced AI Prediction Capstone: From Model to Decision',
    items: [
      'Xây dựng mô hình dự đoán những khách hàng có khả năng ngừng sử dụng sản phẩm hoặc dịch vụ của doanh nghiệp (Customer Churn).',
      'Kiểm tra, làm sạch dữ liệu, thực hiện EDA và chọn các feature ban đầu.',
      'Huấn luyện và so sánh nhiều mô hình dự đoán bằng các metric phù hợp.',
      'Xác định nhóm khách hàng rủi ro cao và phân tích kết quả mô hình.',
      'Đề xuất hành động giữ chân khách hàng và trình bày kết quả bằng slide/demo.',
    ],
  },

  // Module 3
  {
    moduleNumber: 3,
    wsCode: 'WS1',
    title: 'ADVANCED MACHINE LEARNING: Model Benchmark & Selection',
    items: [
      'Xác định bài toán Machine Learning, sử dụng những dữ liệu nào làm đầu vào và chọn chỉ số phù hợp để đánh giá mô hình hoạt động tốt đến đâu.',
      'Xây dựng mô hình baseline để làm mốc so sánh.',
      'Thử và so sánh nhiều nhóm mô hình như Linear/Logistic Regression, KNN, SVM và Decision Tree.',
      'Phân tích lỗi, điều chỉnh threshold và xem mô hình sai ở những trường hợp nào.',
      'Chọn ra các mô hình tốt nhất dựa trên metric, độ ổn định, tốc độ và khả năng giải thích.',
    ],
  },
  {
    moduleNumber: 3,
    wsCode: 'WS2',
    title: 'FEATURE ENGINEERING & MODEL OPTIMIZATION: Reliable Pipeline Lab',
    items: [
      'Kiểm tra các feature và phát hiện nguy cơ rò rỉ dữ liệu (data leakage).',
      'Tạo và cải thiện feature phù hợp với từng loại dữ liệu.',
      'Đóng gói các bước xử lý dữ liệu và mô hình thành một pipeline có thể chạy lại.',
      'Dùng cross-validation để đánh giá mô hình ổn định hơn.',
      'Tuning hyperparameter có kiểm soát và hoàn thiện model card cho mô hình cuối.',
    ],
  },
  {
    moduleNumber: 3,
    wsCode: 'WS3',
    title: 'ENSEMBLE LEARNING: Bagging, Boosting & XGBoost',
    items: [
      'Thực hành Bagging và Random Forest để kết hợp nhiều cây quyết định.',
      'Thực hành Boosting bằng cách kết hợp nhiều mô hình nhỏ, trong đó mỗi mô hình mới tập trung sửa những lỗi mà mô hình trước còn dự đoán chưa tốt.',
      'Huấn luyện và tuning mô hình XGBoost.',
      'So sánh các mô hình ensemble theo độ chính xác, tốc độ và độ phức tạp.',
      'Chọn mô hình ensemble phù hợp để sử dụng cho bài toán thực tế hoặc capstone.',
    ],
  },
  {
    moduleNumber: 3,
    wsCode: 'WS4',
    title: 'Advanced Machine Learning & Feature Engineering',
    items: [
      'Hiểu cách một neuron hoạt động và vai trò của các hàm activation.',
      'Tự xây dense layer và mạng nhiều lớp bằng NumPy.',
      'Thực hành tính loss, chain rule và backpropagation.',
      'Quan sát các vấn đề như vanishing/exploding gradient, overfitting và regularization.',
      'Hoàn thiện một neural network nhỏ từ đầu bằng NumPy và tự viết vòng lặp huấn luyện.',
    ],
  },
  {
    moduleNumber: 3,
    wsCode: 'WS5',
    title: 'Advanced Ensemble Learning & XGBoost',
    items: [
      'Làm quen với Tensor, Autograd, Dataset và DataLoader trong PyTorch.',
      'Xây dựng mô hình DNN bằng nn.Module và chọn loss, optimizer phù hợp.',
      'Viết vòng lặp training/validation và lưu checkpoint tốt nhất.',
      'Thử regularization, learning-rate scheduler và debug khi mô hình học không ổn định, kém hoặc xuất hiện lỗi trong quá trình huấn luyện.',
      'Hoàn thiện một dự án DNN bằng PyTorch có thể chạy lại từ đầu đến cuối.',
    ],
  },
  {
    moduleNumber: 3,
    wsCode: 'WS6',
    title: 'Advanced Deep Learning with PyTorch, CV & Transformers',
    items: [
      'Làm quen với cách máy tính đọc và xử lý hình ảnh, đồng thời hiểu các bước cơ bản từ đưa ảnh vào hệ thống đến khi mô hình phân tích và trả kết quả.',
      'Chạy thử mô hình ảnh pretrained hoặc mini-CNN và xem các trường hợp dự đoán sai.',
      'Làm quen với token, embedding và cách biểu diễn dữ liệu ngôn ngữ.',
      'Hiểu trực quan về self-attention và Transformer.',
      'Thực hiện mini-demo cho Computer Vision và NLP/Transformer để so sánh hai pipeline.',
    ],
  },
  {
    moduleNumber: 3,
    wsCode: 'WS7',
    title: 'Capstone Project',
    items: [
      'Chọn một bài toán thực tế và xác định rõ dữ liệu, target, metric và baseline.',
      'Lập kế hoạch thí nghiệm và lựa chọn mô hình phù hợp với bài toán.',
      'Xây dựng pipeline, huấn luyện, tuning và đánh giá mô hình theo quy trình thống nhất.',
      'Phân tích những trường hợp mô hình cho kết quả chưa tốt, chỉ ra các hạn chế hiện tại và giải thích lý do lựa chọn mô hình, dữ liệu hoặc phương pháp xử lý đã sử dụng.',
      'Hoàn thiện report, notebook/repo, model artifact, slide và demo để bảo vệ dự án.',
    ],
  },

  // Module 4
  {
    moduleNumber: 4,
    wsCode: 'WS1',
    title: 'Computer Vision, Convolution & Neural Network Foundations',
    items: [
      'Làm quen với cách máy tính lưu trữ hình ảnh dưới dạng các điểm ảnh (pixel), đồng thời hiểu sự khác nhau giữa ảnh màu RGB và ảnh xám.',
      'Thực hành resize, crop và normalize ảnh trước khi đưa vào mô hình.',
      'Điều chỉnh độ sáng, độ tương phản và thử các bộ lọc ảnh cơ bản.',
      'Hiểu và thực hành convolution 2D trên ảnh.',
      'Áp dụng các bộ lọc Sobel, Laplacian, blur và sharpen để xử lý ảnh.',
    ],
  },
  {
    moduleNumber: 4,
    wsCode: 'WS2',
    title: 'Optimization, Backpropagation & Classical Computer Vision',
    items: [
      'Chuyển ảnh thành vector và xây lớp Dense đơn giản.',
      'Quan sát loss surface và hướng gradient khi mô hình học.',
      'Thực hành backpropagation trên một mạng nơ-ron nhỏ và kiểm tra gradient.',
      'So sánh mô hình có và không có L2 regularization để thấy ảnh hưởng đến overfitting.',
      'So sánh tốc độ học của SGD và Adam trên cùng một mô hình.',
    ],
  },
  {
    moduleNumber: 4,
    wsCode: 'WS3',
    title: 'CNN, Detection, Segmentation & GPU System Foundations',
    items: [
      'Phân tích histogram và phát hiện điểm góc trên ảnh.',
      'Dùng PCA để giảm chiều, nén ảnh và khôi phục ảnh.',
      'Thực hành các bước chính của PCA bằng NumPy hoặc công cụ có sẵn.',
      'Tìm hiểu ứng dụng PCA trong giảm nhiễu, trực quan hóa và Eigenfaces.',
      'Xây pipeline CV cổ điển: filter → feature → PCA → classifier.',
    ],
  },
  {
    moduleNumber: 4,
    wsCode: 'WS4',
    title: 'Advanced CNN Training & Transfer Learning',
    items: [
      'So sánh MLP và CNN để hiểu vì sao CNN phù hợp hơn với dữ liệu ảnh.',
      'Xây dựng và huấn luyện một mạng CNN cơ bản.',
      'Đọc confusion matrix, precision và recall để đánh giá mô hình.',
      'Thực hành transfer learning với mô hình pretrained như ResNet hoặc VGG.',
      'Thử augmentation, dropout và weight decay để giảm overfitting.',
    ],
  },
  {
    moduleNumber: 4,
    wsCode: 'WS5',
    title: 'Advanced Object Detection & Segmentation',
    items: [
      'Hiểu cách xác định vùng chứa đối tượng bằng khung bao (bounding box) và dùng chỉ số IoU để đo mức độ khớp giữa khung dự đoán với vị trí thật của đối tượng.',
      'Chạy mô hình YOLO hoặc SSD có sẵn và điều chỉnh confidence threshold, NMS.',
      'Thực hành semantic segmentation và instance segmentation.',
      'Áp dụng detection hoặc segmentation cho một bài toán nhỏ với dữ liệu thực tế.',
      'Thiết kế hệ thống Computer Vision dựa trên accuracy, latency và throughput.',
    ],
  },
  {
    moduleNumber: 4,
    wsCode: 'WS6',
    title: 'Advanced GPU Acceleration & Deployment',
    items: [
      'Hiểu sự khác nhau giữa CPU và GPU khi xử lý dữ liệu ảnh.',
      'Quan sát cách GPU xử lý nhiều phép tính song song.',
      'Thực hành phép tính đơn giản bằng NumPy và CuPy/Numba để so sánh tốc độ.',
      'Dùng RAPIDS với cuDF/cuML để chạy một pipeline dữ liệu và Machine Learning trên GPU.',
      'So sánh thời gian chạy giữa CPU và GPU và giải thích kết quả.',
    ],
  },
  {
    moduleNumber: 4,
    wsCode: 'WS7',
    title: 'Advanced Computer Vision Capstone Project',
    items: [
      'Chọn một bài toán nhỏ theo một trong ba hướng: classification, detection hoặc segmentation.',
      'Chuẩn bị dataset và xác định pipeline từ dữ liệu đến mô hình.',
      'Hoàn thiện notebook/repo và đánh giá kết quả mô hình.',
      'Chuẩn bị slide thuyết trình và demo sản phẩm trong khoảng 5-7 phút.',
      'Nhận phản hồi, chỉnh sửa sản phẩm và tự đánh giá kết quả học tập.',
    ],
  },

  // Module 5
  {
    moduleNumber: 5,
    wsCode: 'WS1',
    title: 'NLP, Text Representation & Sequence Foundations',
    items: [
      'Làm quen với các bài toán xử lý văn bản và quy trình NLP từ dữ liệu đến mô hình.',
      'Thực hành làm sạch văn bản và chuyển văn bản thành dữ liệu số bằng Bag-of-Words và TF-IDF.',
      'Xây dựng mô hình phân loại văn bản cơ bản và đọc các chỉ số đánh giá.',
      'Dùng word/sentence embedding và cosine similarity để đo độ giống nhau về ngữ nghĩa.',
      'Hoàn thiện một pipeline Text Machine Learning và phân tích các dự đoán sai.',
    ],
  },
  {
    moduleNumber: 5,
    wsCode: 'WS2',
    title: 'Transformers, LLMs & Generative AI Foundations',
    items: [
      'Hiểu dữ liệu dạng chuỗi, ngữ cảnh và cách RNN/LSTM xử lý văn bản.',
      'Xây dựng mô hình LSTM đơn giản cho bài toán phân loại cảm xúc văn bản.',
      'Trải nghiệm mô hình sequence-to-sequence cho dịch và tóm tắt văn bản.',
      'Đọc precision, recall và F1 thay vì chỉ nhìn accuracy.',
      'So sánh mô hình TF-IDF truyền thống với Embedding/LSTM trên cùng bài toán.',
    ],
  },
  {
    moduleNumber: 5,
    wsCode: 'WS3',
    title: 'RAG, Conversational AI & Domain Assistant Foundations',
    items: [
      'Quan sát cách self-attention và Transformer xác định mối quan hệ giữa các từ trong câu.',
      'Phân biệt BERT, GPT và T5 theo loại bài toán phù hợp.',
      'Thực hành gửi yêu cầu và nhận kết quả từ LLM qua API.',
      'Viết prompt rõ ràng, có cấu trúc và so sánh zero-shot với few-shot.',
      'Yêu cầu AI trả kết quả theo bullet, bảng hoặc JSON và kiểm tra tính ổn định của output.',
    ],
  },
  {
    moduleNumber: 5,
    wsCode: 'WS4',
    title: 'Advanced Generative AI & Prompt Systems',
    items: [
      'Phân biệt mô hình dự đoán với mô hình Generative AI tạo nội dung mới.',
      'Điều chỉnh temperature và top-p để kiểm soát độ ổn định và sáng tạo của kết quả.',
      'Xây dựng quy trình prompt nhiều bước với persona, style và yêu cầu cụ thể.',
      'Thực hành tạo hình ảnh từ văn bản và điều chỉnh prompt theo mục tiêu.',
      'Kết hợp nội dung văn bản và hình ảnh thành một sản phẩm GenAI, đồng thời kiểm tra Responsible AI.',
    ],
  },
  {
    moduleNumber: 5,
    wsCode: 'WS5',
    title: 'Advanced RAG Systems & Retrieval Optimization',
    items: [
      'Dùng embedding để tìm các câu hoặc đoạn văn gần nhau về ý nghĩa.',
      'Xây dựng semantic search và trả về các kết quả gần nghĩa nhất theo top-k.',
      'Hiểu và thiết kế pipeline RAG từ tài liệu nguồn đến câu trả lời của LLM.',
      'Xây dựng RAG mini trên một bộ tài liệu và kiểm thử bằng nhiều câu hỏi.',
      'Cải thiện RAG bằng cách chỉnh top-k, context và prompt để giảm câu trả lời sai hoặc hallucination.',
    ],
  },
  {
    moduleNumber: 5,
    wsCode: 'WS6',
    title: 'Advanced Conversational Agents & Memory',
    items: [
      'Hiểu các thành phần cơ bản của hội thoại như turn, intent, context và persona.',
      'Xây dựng FAQ Bot đơn giản bằng TF-IDF và cosine similarity để làm baseline.',
      'Xây chatbot dùng LLM có khả năng lưu lịch sử hội thoại.',
      'Thử lưu một số lượt hội thoại gần nhất hoặc tóm tắt lịch sử làm memory.',
      'So sánh chatbot có memory và không có memory để đánh giá khả năng giữ ngữ cảnh.',
    ],
  },
  {
    moduleNumber: 5,
    wsCode: 'WS7',
    title: 'Advanced Domain Expert AI Capstone Project',
    items: [
      'Chọn một lĩnh vực và bộ tài liệu phù hợp để xây dựng trợ lý AI chuyên môn hoặc Study Bot.',
      'Tạo embedding/index và xây hệ thống RAG dựa trên tài liệu đã chọn.',
      'Kết hợp RAG với chatbot LLM có memory để duy trì hội thoại.',
      'Kiểm thử chất lượng câu trả lời và chuẩn bị sơ đồ kiến trúc của hệ thống (Architecture Diagram).',
      'Hoàn thiện sản phẩm, slide và demo 5-7 phút; nhận phản hồi để đề xuất hướng cải tiến và maintain sản phẩm.',
    ],
  },

  // Module 6
  {
    moduleNumber: 6,
    wsCode: 'WS1',
    title: 'AI Product Discovery, Architecture & Assisted Build Foundations',
    items: [
      'Làm quen với yêu cầu capstone, AI Sandbox và các công cụ hỗ trợ xây sản phẩm AI.',
      'Dùng AI coding assistant để đọc hiểu và chỉnh sửa những phần code đơn giản.',
      'Xác định sản phẩm dành cho ai, vấn đề cần giải quyết, mục tiêu và phạm vi của dự án.',
      'Chọn hướng kỹ thuật phù hợp như LLM/RAG, Vision, Anomaly hoặc Data pipeline.',
      'Hoàn thiện Project Charter để thống nhất đề tài, phạm vi thực hiện, sản phẩm cần bàn giao và các tiêu chí dùng để đánh giá dự án có đạt mục tiêu hay không.',
    ],
  },
  {
    moduleNumber: 6,
    wsCode: 'WS2',
    title: 'MVP, Observability, UX & Safety Foundations',
    items: [
      'Thử các starter có sẵn cho LLM/RAG, Vision và Anomaly.',
      'Làm quen với giao diện nhanh bằng Streamlit hoặc Gradio và kết nối thử với một hàm AI.',
      'Vẽ luồng hoạt động của sản phẩm từ giao diện, AI core, dữ liệu đến kết quả.',
      'Lựa chọn công cụ và cách phát triển phù hợp với dự án, chẳng hạn làm việc chủ yếu trên Notebook hoặc xây dựng sản phẩm bằng VS Code.',
      'Chốt kiến trúc và tech stack trước khi bắt đầu xây MVP.',
    ],
  },
  {
    moduleNumber: 6,
    wsCode: 'WS3',
    title: 'Evaluation, Optimization, Launch & Portfolio Foundations',
    items: [
      'Xây dựng phiên bản MVP đơn giản nhất của sản phẩm, có đủ các bước chính để người dùng nhập dữ liệu, hệ thống xử lý và trả ra kết quả hoàn chỉnh.',
      'Cải thiện chất lượng AI bằng prompt, rule hoặc threshold đơn giản.',
      'Đưa dữ liệu thực tế của lĩnh vực đang làm, như văn bản, file CSV, hình ảnh hoặc dữ liệu log, vào hệ thống để mô hình có thể xử lý và sử dụng.',
      'Lưu input/output và chạy các test case để phát hiện lỗi hoặc hành vi bất thường.',
      'Review MVP và lập danh sách việc cần sửa cho sprint tiếp theo.',
    ],
  },
  {
    moduleNumber: 6,
    wsCode: 'WS4',
    title: 'Advanced AI Product Architecture & Orchestration',
    items: [
      'Thiết kế giao diện đơn giản, rõ ràng và tập trung vào một mục tiêu, chức năng chính.',
      'Kết nối giao diện với AI core và xử lý các lỗi cơ bản để tránh ứng dụng bị crash.',
      'Bổ sung text, image, file hoặc visualization khi thật sự phù hợp với use case.',
      'Thêm guardrails như giới hạn chủ đề, lọc input, disclaimer hoặc fallback an toàn.',
      'Thực hiện user testing với trường hợp bình thường, dữ liệu sai và edge case.',
    ],
  },
  {
    moduleNumber: 6,
    wsCode: 'WS5',
    title: 'Advanced AI Quality, Safety & Optimization',
    items: [
      'Chọn 2-3 chỉ số phù hợp để đo chất lượng sản phẩm AI.',
      'Thử tối ưu tốc độ, chi phí hoặc chất lượng và so sánh kết quả trước/sau.',
      'Hoàn thiện file README để mô tả rõ sản phẩm, cách cài đặt, cách sử dụng và các bước cần thiết để người khác có thể chạy lại sản phẩm.',
      'Xây pitch deck theo mạch: Problem → Insight → Solution → Demo → Impact → Next Step.',
      'Dry-run toàn bộ phần trình bày, demo và chuẩn bị câu trả lời cho Q&A.',
    ],
  },
  {
    moduleNumber: 6,
    wsCode: 'WS6',
    title: 'Advanced Launch, Product Operations & Portfolio',
    items: [
      'Sửa các lỗi còn lại và kiểm tra lại giao diện, các lớp bảo vệ an toàn, dữ liệu sử dụng và toàn bộ quy trình demo để đảm bảo sản phẩm hoạt động ổn định trước khi trình bày.',
      'Tạo AI Product One-Pager hoặc poster giới thiệu nhanh sản phẩm và đường dẫn/QR demo.',
      'Rà soát và hoàn thiện README, ảnh minh họa, kiến trúc, pitch deck và portfolio.',
      'Xác định Future Work và hướng phát triển tiếp theo sau Module 6.',
    ],
  },
  {
    moduleNumber: 6,
    wsCode: 'WS7',
    title: 'Advanced Capstone Technical Defense & Reflection',
    items: [
      'Trình bày sản phẩm AI hoàn chỉnh, chạy demo và trả lời Q&A trước hội đồng.',
      'Giải thích bài toán, kỹ thuật AI, trải nghiệm người dùng và giá trị của sản phẩm.',
      'Nộp đầy đủ sản phẩm cuối, pitch deck, README và các tài liệu portfolio.',
      'Viết reflection về những gì đã học, teamwork và kế hoạch phát triển tiếp theo.',
    ],
  },
]

export function getWorkshopContent(moduleNumber: number, wsCode: string) {
  return workshopContents.find((w) => w.moduleNumber === moduleNumber && w.wsCode === wsCode)
}
