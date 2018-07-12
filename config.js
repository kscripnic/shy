module.exports = {
  secret: process.env.SECRETKEY || '123',
  email: {
    host: process.env.EMAILHOST ||  'smtp.ethereal.email',
    port: process.env.EMAILPORT ||  587,
    user: process.env.EMAILUSER ||  'wcydpurs5euvhezp@ethereal.email',
    pass: process.env.EMAILPASS ||  '1ddBRJHFST6uYZY5nN'
  }
};