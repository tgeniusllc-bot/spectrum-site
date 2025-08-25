# Marketing Data Management Guide

## Overview

This guide provides instructions for contributors who need to update and maintain the marketing content for the Spectrum Psychiatry website. The site is hosted on **Netlify** and automatically deploys when changes are made to the repository.

## Important Information

- **Data File Location**: `data/wordpressData.json`
- **Hosting Platform**: Netlify
- **Technology**: Next.js website with JSON-based content management
- **Auto-Deployment**: Changes pushed to the main branch will automatically trigger a new deployment

## Getting Started

### Prerequisites
- Basic understanding of JSON format
- Text editor (VS Code, Sublime Text, or similar)
- Git knowledge for version control

### File Structure
The `wordpressData.json` file contains structured data for all website pages:
- `home` - Homepage content
- `about` - About page content  
- `medicationManagementTherapy` - Medication Management service page
- `suboxoneTherapy` - Suboxone Treatment service page
- `individualTherapy` - Individual Therapy service page
- `ketamineTreatment` - Ketamine Treatment service page
- `contact` - Contact page content
- `contactInformation` - Contact details and location
- `nextJsSiteSettings` - Site-wide settings (logo, footer links)

## Making Content Changes

### ⚠️ CRITICAL: JSON Format Rules
1. **Always maintain proper JSON syntax**
2. **Use double quotes (") for all strings, never single quotes (')**
3. **Escape special characters properly**:
   - Use `\"` for quotes within text
   - Use `\\` for backslashes
   - Use `\n` for line breaks in text
4. **Ensure all brackets `{}` and `[]` are properly closed**
5. **Add commas after each object/array item (except the last one)**

### Common Editing Tasks

#### 1. Updating Text Content
To change titles, descriptions, or other text content:

```json
{
  "homeHeroTitle": "Your New Title Here",
  "homeHeroDescription": "Your new description text"
}
```

#### 2. Updating Images
Images are hosted on Cloudinary. To change an image:

```json
{
  "sourceUrl": "https://res.cloudinary.com/dmgi3xmla/image/upload/v1741284490/your-new-image.jpg"
}
```

#### 3. Updating Contact Information
Located in the `contactInformation` section:

```json
{
  "contactInfoAddress": "15615 Alton Pkwy Ste 220 Irvine, CA 92618",
  "contactInfoPhone": "+1 (949) 665-9136",
  "contactInfoEmail": "info@spectrumpsychiatry.us"
}
```

#### 4. Adding/Editing Services
Services are located in various sections. For the main services grid on homepage:

```json
{
  "servicesGridCardTitle": "Service Name",
  "servicesGridCardDescription": "Service description here",
  "servicesGridCardLink": "/service-page-url"
}
```

#### 5. Updating Team Members
Located in `about.acfAboutPage.aboutPageBlocks.aboutOurTeam.teamMember`:

```json
{
  "teamMemberImage": {
    "node": {
      "sourceUrl": "https://res.cloudinary.com/dmgi3xmla/image/upload/v1741284490/doctor-image.jpg"
    }
  },
  "teamMemberName": "Dr. Name Here, MD",
  "teamMemberRole": "Psychiatrist",
  "teamMemberLocation": "15615 Alton Pkwy suite 220, Irvine, CA 92618"
}
```

## Content Sections Explained

### Homepage (`home`)
- **homeHero**: Main banner section with title, description, background image, and call-to-action button
- **featureSection**: Features grid with benefits and accepted insurances
- **alternatingBlock**: Alternating content blocks with images and text
- **bannerCarouselBlock**: Image carousel section
- **servicesGrid**: Main services offered
- **blockWithImageTiles**: Additional content section with image tiles

### About Page (`about`)
- **aboutHero**: Hero section with doctor information
- **aboutStatsSection**: Statistics about mental health
- **aboutImage**: Featured image section
- **aboutOurValues**: Doctor credentials and qualifications
- **aboutOurTeam**: Team member profiles
- **aboutJoinOurTeam**: Additional doctor profile section

### Service Pages
Each service page (`medicationManagementTherapy`, `suboxoneTherapy`, `individualTherapy`, `ketamineTreatment`) contains:
- **servicesHero**: Page header with title and background
- **featureSection**: Service benefits and information
- **alternatingBlock**: Additional service details
- **references**: Scientific references (where applicable)

## Deployment Process

### Automatic Deployment
1. Make your changes to `data/wordpressData.json`
2. Commit and push changes to the repository
3. Netlify will automatically detect changes and redeploy the site
4. Changes will be live within 2-5 minutes

### Testing Your Changes
1. **Validate JSON**: Use an online JSON validator (like jsonlint.com) before committing
2. **Preview locally**: Run `npm run dev` to test changes locally if you have Node.js installed
3. **Check deployment**: Monitor the Netlify dashboard for successful deployment

## Best Practices

### Content Guidelines
1. **Maintain professional tone** appropriate for a medical practice
2. **Keep descriptions concise** but informative
3. **Use consistent terminology** across all pages
4. **Ensure all medical claims are accurate** and properly referenced
5. **Maintain brand consistency** in messaging and tone

### Technical Guidelines
1. **Always backup the file** before making major changes
2. **Make small, incremental changes** rather than large bulk updates
3. **Test JSON syntax** before committing
4. **Use descriptive commit messages** when pushing changes
5. **Keep image URLs consistent** with the Cloudinary CDN format

## Troubleshooting

### Common Issues
1. **Site not loading**: Check JSON syntax for errors
2. **Images not displaying**: Verify Cloudinary URLs are correct
3. **Content not updating**: Clear browser cache and check deployment status
4. **Broken layout**: Ensure all required fields are present

### Emergency Rollback
If changes cause issues:
1. Revert to the previous version using Git
2. Push the reverted version to trigger redeployment
3. Contact the development team if issues persist

## Support Contacts

For technical issues or questions about content management:
- Development Team: [Insert contact information]
- Emergency Support: [Insert emergency contact]

## File Backup

**Important**: Always keep a backup of the working `wordpressData.json` file before making significant changes. The file can be restored from Git history if needed.

---

## Code Protection Notice

### Intellectual Property Rights

This codebase and all associated files, including but not limited to source code, documentation, design assets, and configuration files, are the exclusive property of **Spectrum Psychiatry** and its authorized development team.

### Usage Restrictions

**STRICTLY PROHIBITED:**
- Copying, reproducing, or duplicating any portion of this code for use in other projects
- Distributing, sharing, or transmitting this code to unauthorized parties
- Reverse engineering, decompiling, or attempting to derive the source logic
- Using this code as a template or foundation for competing services
- Modifying the code for use outside of the Spectrum Psychiatry website

### Authorized Access

Access to this codebase is granted solely for the purpose of maintaining and updating marketing content as specified in this document. Contributors are authorized only to:
- Update content within the `data/wordpressData.json` file
- Make approved changes to marketing copy and imagery
- Follow established deployment procedures

### Confidentiality

All contributors must maintain strict confidentiality regarding:
- Technical implementation details
- System architecture and design patterns
- Third-party integrations and API configurations
- Business logic and proprietary methodologies

### Legal Compliance

Unauthorized use, reproduction, or distribution of this code may result in:
- Immediate termination of access privileges
- Legal action for copyright infringement
- Liability for damages and legal costs
- Violation of confidentiality agreements

---

*This document was last updated: August 2025*
*For questions about this guide, please contact the development team.*
