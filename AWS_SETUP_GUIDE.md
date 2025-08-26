# 🚀 AWS SES Setup Guide

## ✅ **API Route Fixed!**
The API route error has been resolved. Now you need to set up AWS SES.

## 📋 **Quick Setup Steps**

### **1. Create .env.local File**
Create a new file called `.env.local` in your project root with:

```bash
# AWS SES Configuration
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your_access_key_here
AWS_SECRET_ACCESS_KEY=your_secret_key_here
AWS_SES_FROM_EMAIL=noreply@harshatummalapalli.tech
AWS_SES_TO_EMAIL=sriharshatummalapalli@gmail.com
```

### **2. AWS Console Setup**

#### **A. Go to AWS SES**
1. **Login** to AWS Console
2. **Search** for "SES" (Simple Email Service)
3. **Select** your region (us-east-1 recommended)

#### **B. Verify Your Domain**
1. **Go to** "Verified identities"
2. **Click** "Create identity"
3. **Choose** "Domain"
4. **Enter**: `harshatummalapalli.tech`
5. **Copy** the DNS records AWS provides

#### **C. Create IAM User**
1. **Go to** IAM service
2. **Create** new user (e.g., "portfolio-ses-user")
3. **Attach policy**: `AmazonSESFullAccess`
4. **Create** Access Key
5. **Copy** Access Key ID and Secret

### **3. DNS Records Status**
You mentioned you've added the DNS records. Check in AWS SES if your domain shows as "Verified".

### **4. Environment Variables**
Replace the values in `.env.local` with your actual AWS credentials.

### **5. Test**
Once setup is complete, try sending a message from your contact form!

## 🔧 **Current Status**
- ✅ **API Route**: Fixed (no more 500 error)
- ⏳ **Domain Verification**: Check AWS console
- ⏳ **Environment Variables**: Need to be created
- ⏳ **Testing**: Ready once AWS is verified

## ❓ **Need Help?**
Let me know:
1. What you see in AWS SES console for domain verification
2. If you need help creating the IAM user
3. Any other AWS setup questions

