mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Atlas Connected"))
.catch((err) => {
  console.error("DB connection error:", err.message);
  process.exit(1);
});
 