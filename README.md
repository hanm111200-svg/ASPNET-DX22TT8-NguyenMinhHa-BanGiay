# 🌐 ASP.NET — Giới Thiệu & Hướng Dẫn Cài Đặt

![ASP.NET](https://img.shields.io/badge/ASP.NET-Core-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)
![Visual Studio](https://img.shields.io/badge/Visual%20Studio-2022-5C2D91?style=for-the-badge&logo=visualstudio&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## 📌 Mục Lục

- [ASP.NET là gì?](#-aspnet-là-gì)
- [Các phiên bản ASP.NET](#-các-phiên-bản-aspnet)
- [Tính năng nổi bật](#-tính-năng-nổi-bật)
- [Kiến trúc ASP.NET Core](#-kiến-trúc-aspnet-core)
- [Yêu cầu hệ thống](#-yêu-cầu-hệ-thống)
- [Cài đặt Visual Studio](#-cài-đặt-visual-studio)
- [Tạo project ASP.NET đầu tiên](#-tạo-project-aspnet-đầu-tiên)
- [Cấu trúc thư mục dự án](#-cấu-trúc-thư-mục-dự-án)
- [Tài nguyên học tập](#-tài-nguyên-học-tập)

---

## 🧩 ASP.NET là gì?

**ASP.NET** (Active Server Pages .NET) là một framework phát triển web mã nguồn mở, miễn phí do **Microsoft** xây dựng và duy trì. ASP.NET cho phép lập trình viên tạo ra các ứng dụng web, API, và dịch vụ web hiệu năng cao trên nền tảng **.NET**.

> 💡 **ASP.NET Core** là phiên bản hiện đại, đa nền tảng (cross-platform) của ASP.NET, chạy được trên **Windows**, **macOS** và **Linux**.

ASP.NET được sử dụng rộng rãi trong:

- 🏢 Ứng dụng doanh nghiệp (Enterprise Applications)
- 🛒 Thương mại điện tử (E-commerce)
- 🔌 RESTful API & Microservices
- 📊 Hệ thống quản lý nội dung (CMS)
- ☁️ Ứng dụng đám mây (Cloud-native Apps)

---

## 📋 Các Phiên Bản ASP.NET

| Phiên bản | Năm ra mắt | Đặc điểm |
|---|---|---|
| ASP.NET Web Forms | 2002 | Mô hình RAD (Rapid Application Development), dành cho Windows |
| ASP.NET MVC | 2009 | Mô hình Model-View-Controller, tách biệt logic và giao diện |
| ASP.NET Web API | 2012 | Xây dựng HTTP API theo chuẩn RESTful |
| **ASP.NET Core** | 2016 | Đa nền tảng, hiệu năng cao, mã nguồn mở ✅ **(Khuyến nghị)** |
| ASP.NET Core 8.0 | 2023 | LTS — Phiên bản ổn định dài hạn mới nhất |

---

## ✨ Tính Năng Nổi Bật

### 🚀 Hiệu năng cao
ASP.NET Core liên tục đứng top trong các bảng xếp hạng benchmark web framework toàn cầu (TechEmpower), vượt trội so với Node.js, Django và Spring.

### 🌍 Đa nền tảng
Chạy trên Windows, macOS và Linux — triển khai linh hoạt trên cloud (Azure, AWS, GCP) hoặc Docker container.

### 🔒 Bảo mật tích hợp
- Xác thực & phân quyền (Authentication & Authorization)
- Chống CSRF, XSS tích hợp sẵn
- Hỗ trợ OAuth2, JWT, Identity

### 🧩 Dependency Injection
Hỗ trợ DI tích hợp sẵn trong framework, giúp code dễ test và bảo trì.

### 🔄 Hỗ trợ nhiều mô hình lập trình
- **MVC** — Dành cho web app truyền thống
- **Razor Pages** — Đơn giản hóa mô hình page-based
- **Blazor** — Xây dựng UI tương tác bằng C# (thay thế JavaScript)
- **Minimal API** — API siêu gọn nhẹ, nhanh chóng
- **gRPC** — Giao tiếp microservices hiệu năng cao

---

## 🏗️ Kiến Trúc ASP.NET Core

```
┌─────────────────────────────────────────┐
│            Client (Browser/App)         │
└──────────────────┬──────────────────────┘
                   │ HTTP Request
┌──────────────────▼──────────────────────┐
│           Middleware Pipeline           │
│  (Logging → Auth → Routing → ...)       │
└──────────────────┬──────────────────────┘
                   │
┌──────────────────▼──────────────────────┐
│         Controller / Razor Page         │
│         Minimal API / Blazor            │
└──────────────────┬──────────────────────┘
                   │
┌──────────────────▼──────────────────────┐
│           Service Layer (DI)            │
└──────────────────┬──────────────────────┘
                   │
┌──────────────────▼──────────────────────┐
│     Data Access (EF Core / Dapper)      │
│          Database (SQL/NoSQL)           │
└─────────────────────────────────────────┘
```

---

## 💻 Yêu Cầu Hệ Thống

Trước khi cài đặt Visual Studio, hãy đảm bảo máy tính của bạn đáp ứng:

| Thành phần | Yêu cầu tối thiểu |
|---|---|
| **Hệ điều hành** | Windows 10 (64-bit) phiên bản 1909 trở lên |
| **RAM** | 4 GB (khuyến nghị 8 GB trở lên) |
| **Ổ cứng** | 20–50 GB dung lượng trống |
| **CPU** | 1.8 GHz, 4-core trở lên |
| **Màn hình** | Độ phân giải 1280×720 trở lên |
| **.NET SDK** | .NET 8.0 hoặc mới hơn |

---

## 🛠️ Cài Đặt Visual Studio

### Bước 1 — Tải Visual Studio Installer

Truy cập trang chính thức của Microsoft để tải về:

🔗 **https://visualstudio.microsoft.com/downloads/**

Chọn phiên bản phù hợp:

| Phiên bản | Đối tượng | Chi phí |
|---|---|---|
| **Community** | Cá nhân, sinh viên, dự án mã nguồn mở | **Miễn phí** ✅ |
| Professional | Nhóm nhỏ & doanh nghiệp vừa | Trả phí |
| Enterprise | Doanh nghiệp lớn | Trả phí |

> 🎓 **Sinh viên và người mới học:** Chọn **Community 2022** — hoàn toàn miễn phí và đầy đủ tính năng.

---

### Bước 2 — Chạy Visual Studio Installer

1. Mở file `VisualStudioSetup.exe` vừa tải về.
2. Chấp nhận điều khoản sử dụng và nhấn **Continue**.
3. Chờ Installer tải về các thành phần cơ bản.

---

### Bước 3 — Chọn Workload

Trong màn hình **Workloads**, tích chọn:

- ✅ **ASP.NET and web development** *(bắt buộc)*
- ✅ **.NET desktop development** *(tùy chọn)*
- ✅ **Azure development** *(nếu cần deploy lên Azure)*
- ✅ **Node.js development** *(nếu phát triển fullstack)*

![Workload Selection](https://learn.microsoft.com/en-us/visualstudio/install/media/vs-installer-workloads.png)

---

### Bước 4 — Chọn Individual Components (Tùy chọn)

Chuyển sang tab **Individual components** để thêm:

- `.NET 8.0 Runtime`
- `Git for Windows`
- `GitHub Extension for Visual Studio`
- `SQL Server Express LocalDB`

---

### Bước 5 — Cài Đặt

1. Chọn vị trí cài đặt (mặc định: `C:\Program Files\Microsoft Visual Studio\2022\Community`).
2. Nhấn **Install** và chờ quá trình hoàn tất (có thể mất 15–45 phút tùy tốc độ mạng).
3. Khởi động lại máy tính nếu được yêu cầu.

---

### Bước 6 — Đăng Nhập Tài Khoản Microsoft (Tùy chọn)

Khi Visual Studio mở lần đầu, bạn có thể đăng nhập bằng tài khoản Microsoft để:
- Đồng bộ cài đặt giữa các máy
- Sử dụng Visual Studio Community không giới hạn
- Truy cập Azure DevOps

---

## 🚀 Tạo Project ASP.NET Đầu Tiên

### Sử dụng Visual Studio

```
1. Mở Visual Studio 2022
2. Chọn "Create a new project"
3. Tìm và chọn "ASP.NET Core Web App (Model-View-Controller)"
4. Cấu hình project:
   - Project name: MyFirstWebApp
   - Location: D:\Projects\
   - Solution name: MyFirstWebApp
5. Chọn Framework: .NET 8.0
6. Authentication type: None (có thể thêm sau)
7. Nhấn "Create"
```

### Sử dụng .NET CLI

```bash
# Tạo project MVC
dotnet new mvc -n MyFirstWebApp

# Di chuyển vào thư mục project
cd MyFirstWebApp

# Chạy ứng dụng
dotnet run
```

Mở trình duyệt và truy cập: **https://localhost:5001**

---

## 📁 Cấu Trúc Thư Mục Dự Án

```
MyFirstWebApp/
├── 📁 Controllers/          # Xử lý logic & điều hướng request
│   └── HomeController.cs
├── 📁 Models/               # Định nghĩa cấu trúc dữ liệu
│   └── ErrorViewModel.cs
├── 📁 Views/                # Giao diện người dùng (Razor)
│   ├── Home/
│   │   ├── Index.cshtml
│   │   └── Privacy.cshtml
│   └── Shared/
│       └── _Layout.cshtml   # Layout chung
├── 📁 wwwroot/              # File tĩnh (CSS, JS, Images)
│   ├── css/
│   ├── js/
│   └── lib/
├── 📄 appsettings.json      # Cấu hình ứng dụng
├── 📄 Program.cs            # Điểm khởi động ứng dụng
└── 📄 MyFirstWebApp.csproj  # File cấu hình project
```

---

## 📚 Tài Nguyên Học Tập

| Tài nguyên | Link |
|---|---|
| 📖 Tài liệu chính thức Microsoft | https://learn.microsoft.com/aspnet/core |
| 🎓 Khóa học miễn phí (Microsoft Learn) | https://learn.microsoft.com/training |
| 📺 Video hướng dẫn .NET | https://www.youtube.com/@dotnet |
| 💬 Cộng đồng ASP.NET | https://forums.asp.net |
| 🐙 Source code mẫu | https://github.com/dotnet/aspnetcore |

---

## 🤝 Đóng Góp

Nếu bạn muốn đóng góp vào dự án, vui lòng:

1. Fork repository này
2. Tạo branch mới: `git checkout -b feature/ten-tinh-nang`
3. Commit thay đổi: `git commit -m 'Thêm tính năng mới'`
4. Push lên branch: `git push origin feature/ten-tinh-nang`
5. Tạo Pull Request

---

## 📄 Giấy Phép

Dự án này được cấp phép theo [MIT License](LICENSE).

---

<div align="center">

Made with ❤️ using ASP.NET Core

</div>
