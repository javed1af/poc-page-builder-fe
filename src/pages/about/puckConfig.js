const getPuckConfig = () => ({
  components: {
    HeadingBlock: {
      fields: {
        children: { type: "text" },
      },
      render: ({ children }) => <h1>{children}</h1>,
    },
    Paragraph: {
      fields: {
        text: { type: "text" },
      },
      render: ({ text }) => <p>{text}</p>,
    },
  },
});

export default getPuckConfig;
