# Portfolio App

Một project Next.js được khởi tạo với các công nghệ hiện đại:

- **Next.js 15.5.2** - React framework với App Router
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - Component library với New York style
- **Yarn** - Package manager

## Cấu trúc Project

```
src/
├── app/                 # App Router (Next.js 13+)
│   ├── globals.css     # Global styles với Tailwind
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── ui/            # shadcn/ui components
│   └── layout/        # Layout components
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
│   └── utils.ts       # shadcn/ui utilities
├── types/             # TypeScript type definitions
└── constants/         # App constants
```

## Getting Started

Cài đặt dependencies:

```bash
yarn install
```

Chạy development server:

```bash
yarn dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

## Thêm shadcn/ui Components

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
