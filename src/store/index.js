import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      name: "Andrew",
      gender: "Male",
      phone: "111-111-111-111",
      id: "u1",
    },
    posts: [
      {
        title: "New post",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, nam.",
        postedAt: new Date(2021, 4, 21, 10, 33, 30).toLocaleString(),
        postedBy: "u1",
        id: "p1",
      },
    ],
    comments: [
      {
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, nam.",
        commentedAt: new Date().toLocaleString(),
        commentedBy: "u1",
        postId: "p1",
        id: "c1",
      },
    ],
  },
  mutations: {
    addComment(state, comment) {
      state.comments.push(comment);
    },
  },
  actions: {},
  modules: {},
});
