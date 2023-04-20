const app = Vue.createApp({
  data() {
    return {
      name: "Enoch Ha",
      age: 41,
      imgSrc: "avatar.jpeg",
      inputValue: "",
    };
  },
  methods: {
    handleAgeIn5Years() {
      return this.age + 5;
    },
    handleGenerateRandomNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
