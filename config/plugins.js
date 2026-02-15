export default ({ env }) => {
  return {
    upload: {
      config: {
        provider: "aws-s3",
        providerOptions: {
          credentials: {
            accessKeyId: env("R2_ACCESS_KEY_ID"),
            secretAccessKey: env("R2_SECRET_ACCESS_KEY"),
          },
          region: "auto",
          endpoint: `https://${env("R2_ACCOUNT_ID")}.r2.cloudflarestorage.com`,
          s3ForcePathStyle: true, // 🔥 REQUIRED FOR R2
          params: {
            Bucket: env("R2_BUCKET_NAME"),
          },
          actionOptions: {
            upload: {},
            uploadStream: {},
            delete: {},
          },
          baseUrl: env("R2_PUBLIC_URL"),
        },
      },
    },
  };
};
