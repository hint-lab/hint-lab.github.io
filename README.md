# H!NT Lab Website

[English](#english) | [中文](#中文)

---

## English

### Introduction

This is the official website for H!NT Lab (Human-Intelligence iNTegration Lab) at Shanghai University. The lab focuses on exploring cutting-edge technologies for the deep integration of human intelligence and machine intelligence, dedicated to building more natural, efficient, and intelligent human-AI collaboration systems.

### Tech Stack

- **Framework**: Next.js 14 (Static Site Generation)
- **Language**: TypeScript
- **Styling**: CSS with custom properties
- **Icons**: Lucide React
- **Deployment**: GitHub Pages
- **i18n**: Custom JSON-based internationalization

### Features

- 🌐 **Multilingual Support**: Chinese, English, and Japanese
- 📱 **Responsive Design**: Mobile-friendly layout
- 🎨 **Modern UI**: Clean and professional interface
- 🚀 **Static Export**: Fast loading and SEO-friendly
- 🔍 **Research Showcase**: Display lab projects, publications, and team members
- 📄 **Personal Profiles**: Detailed pages for lab members

### Project Structure

```
hint-lab.github.io/
├── app/                      # Next.js app directory
│   ├── page.tsx             # Homepage (Chinese)
│   ├── en/                  # English pages
│   ├── ja/                  # Japanese pages
│   ├── people/              # Personal profile pages
│   │   └── wang_hao/        # Prof. Wang Hao's profile
│   ├── publication/         # Publications page
│   ├── components/          # Reusable components
│   ├── lib/                 # Utility functions
│   └── globals.css          # Global styles
├── i18n/                    # Internationalization files
│   ├── zh.json             # Chinese translations
│   ├── en.json             # English translations
│   └── ja.json             # Japanese translations
├── public/                  # Static assets
│   ├── projects/           # Project logos
│   └── *.svg               # Icons and images
└── .github/workflows/       # CI/CD configuration
```

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/hint-lab/hint-lab.github.io.git
   cd hint-lab.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   Navigate to `http://localhost:3000`

### Build and Deploy

1. **Build for production**
   ```bash
   npm run build
   ```

2. **Preview production build**
   ```bash
   npm run start
   ```

3. **Deploy to GitHub Pages**
   - The site automatically deploys when changes are pushed to the `main` branch
   - GitHub Actions workflow handles the build and deployment process
   - View deployment status at: `https://github.com/hint-lab/hint-lab.github.io/actions`

### Adding Content

#### Add a New Research Project

Edit the corresponding i18n file (`i18n/zh.json`, `i18n/en.json`, or `i18n/ja.json`):

```json
{
  "projects": {
    "cards": [
      {
        "name": "Project Name",
        "description": "Project description",
        "logo": "/projects/project-logo.svg",
        "link": "https://project-url.com",
        "status": "Under Development" // Optional
      }
    ]
  }
}
```

#### Add a New Publication

Place PDF files in `public/publications/` and update the i18n files.

#### Update Team Information

Edit the student/alumni tables in the i18n files under the `students` or `alumni` sections.

### Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### License

© 2025 H!NT Lab. All rights reserved.

### Contact

- **Email**: wang-hao@shu.edu.cn
- **Website**: https://hint-lab.github.io/

---

## 中文

### 项目介绍

这是上海大学 H!NT Lab（Human-Intelligence iNTegration Lab，人机智能融合实验室）的官方网站。实验室专注于探索人类智能与机器智能深度融合的前沿技术，致力于构建更加自然、高效、智能的人机协同系统。

### 技术栈

- **框架**: Next.js 14 (静态站点生成)
- **语言**: TypeScript
- **样式**: CSS 自定义属性
- **图标**: Lucide React
- **部署**: GitHub Pages
- **国际化**: 基于 JSON 的自定义国际化方案

### 功能特性

- 🌐 **多语言支持**: 中文、英文、日文
- 📱 **响应式设计**: 移动端友好布局
- 🎨 **现代化界面**: 简洁专业的设计
- 🚀 **静态导出**: 快速加载，SEO 友好
- 🔍 **研究展示**: 展示实验室项目、论文和团队成员
- 📄 **个人主页**: 详细的成员个人页面

### 项目结构

```
hint-lab.github.io/
├── app/                      # Next.js 应用目录
│   ├── page.tsx             # 主页（中文）
│   ├── en/                  # 英文页面
│   ├── ja/                  # 日文页面
│   ├── people/              # 个人主页
│   │   └── wang_hao/        # 王昊教授主页
│   ├── publication/         # 研究成果页面
│   ├── components/          # 可复用组件
│   ├── lib/                 # 工具函数
│   └── globals.css          # 全局样式
├── i18n/                    # 国际化文件
│   ├── zh.json             # 中文翻译
│   ├── en.json             # 英文翻译
│   └── ja.json             # 日文翻译
├── public/                  # 静态资源
│   ├── projects/           # 项目 logo
│   └── *.svg               # 图标和图片
└── .github/workflows/       # CI/CD 配置
```

### 本地开发

1. **克隆仓库**
   ```bash
   git clone https://github.com/hint-lab/hint-lab.github.io.git
   cd hint-lab.github.io
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **运行开发服务器**
   ```bash
   npm run dev
   ```

4. **打开浏览器**
   访问 `http://localhost:3000`

### 构建和部署

1. **生产环境构建**
   ```bash
   npm run build
   ```

2. **预览生产构建**
   ```bash
   npm run start
   ```

3. **部署到 GitHub Pages**
   - 当更改推送到 `main` 分支时，网站会自动部署
   - GitHub Actions 工作流处理构建和部署过程
   - 查看部署状态: `https://github.com/hint-lab/hint-lab.github.io/actions`

### 添加内容

#### 添加新的研究项目

编辑相应的国际化文件（`i18n/zh.json`、`i18n/en.json` 或 `i18n/ja.json`）：

```json
{
  "projects": {
    "cards": [
      {
        "name": "项目名称",
        "description": "项目描述",
        "logo": "/projects/project-logo.svg",
        "link": "https://project-url.com",
        "status": "开发中" // 可选
      }
    ]
  }
}
```

#### 添加新的论文

将 PDF 文件放在 `public/publications/` 目录下，并更新国际化文件。

#### 更新团队信息

在国际化文件的 `students` 或 `alumni` 部分编辑学生/校友表格。

### 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

### 许可证

© 2025 H!NT Lab. 保留所有权利。

### 联系方式

- **邮箱**: wang-hao@shu.edu.cn
- **网站**: https://hint-lab.github.io/

