const rootRender = (req, res) => {
  res
    .status(200)
    .send(`<h1>Welcome To Mentor and Student Assigning with Database    `);
};
export default { rootRender };
