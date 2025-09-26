# DouingIt Website

A modern Next.js website for DouingIt - preserving family legacies through guided pathways, storytelling, and inter-generational connections.

## Features

- **Modern Design**: Clean, responsive design with Tailwind CSS
- **Contact Forms**: Integrated with Resend for email collection
- **Service Sections**: 
  - Seedling Membership
  - Virtual Travel
  - Intercultural Family Coaching
  - Genealogy Navigation Workshop
  - Roots and Reflection Storytelling
  - Memory Preservation
- **Mobile Responsive**: Optimized for all devices
- **Email Integration**: Automatic email notifications for form submissions

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   Create a `.env.local` file with:
   ```
   RESEND_API_KEY=your_resend_api_key
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is configured for deployment on Netlify:

1. Connect your GitHub repository to Netlify
2. Set the build command to: `npm run build`
3. Set the publish directory to: `.next`
4. Add your environment variables in Netlify's dashboard
5. Deploy!

## Environment Variables

- `RESEND_API_KEY`: Your Resend API key for email functionality
- `NEXT_PUBLIC_SITE_URL`: The URL of your deployed site

## Contact Form

The contact form sends emails using Resend and includes:
- Customer information collection
- Service interest selection
- Automatic confirmation emails
- Admin notification emails

## Tech Stack

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- Resend (Email service)
- Lucide React (Icons)