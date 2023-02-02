import { createSlice } from "@reduxjs/toolkit";

export const toolkitTextSlice = createSlice({
  name: "textSlice",
  initialState: {
    textValue: "null",
    values: {
      HTML: "Умею верстать с соблюдением семантики",
      CSS: "Язык стилей, который позволяет украшать страницу, на каждом новом проекте я обязательно узнаю что-то новое из него.",
      JS: "Обладаю необходимыми знаниями, которые позволяют мне писать логику разной сложности, оживлять сайты.",
      TS: "Надстройка над JS, которая даёт немало преимуществ на этапе разработки, она предотвращает потенциальные ошибки, благодаря тому, что мы изначально определяем типы данных, которыми мы  будем  пользоваться в ходе разработки, а в случае потенциальной ошибки TS оповестит нас об этом. На данном этапе я продолжаю  знакомиться с типизацией элементов.",
      React:
        "Один из 3-х самых популярных фреймворков(а на самом деле библиотека), который оптимизирует работу JS кода и ускоряет её, от чего получаются быстрые и отзывчивиые single page application. Принцип работы React строится на разбитие кода на компоненты, которые можно переиспользовать в любой части кода, что позволяет экономить время.",
      ReudxInfo:
        "Redux - state менеджер, который решает проблему состояния, позволяя не перекиидывать его каждый раз  через props, а создать store  и орбащаться к нему из любой точки прииложения. Изначально познакомился с Redux, но в последствии перешёл на Redux Toolkit, который используется на данном сайте.",
      RRD: "Изучал React Router Dom v.6, данная библиотека позволяет выстраивать динамическую маршрутизацию на сайте. Данный сайт был написан с использованием Router Dom.",
      Axios:
        "JS библиотека, которая позволяет работать с асинхронным кодом быстрее  и легче, чем используя стандартные promise-запросы. В процессе обучения сталкивался с ней в обучающих роликах и статьях. ",
      Figma:
        "В начале обучения столкнулся с данной программой, искал макеты в иинтернете  и пробовал верстать сайты на их основе.",
      Sass: "Данный препроцессор расширяет возможности классического CSS, позволяя работать более удобно со стилизацией. Сейчас продолжаю изучение, используя его на каждом проекте, за который берусь. Данный сайт был написан на этом препроцессоре.",
    },
  },
  reducers: {
    addText(state, code) {
      state.textValue = state.values[code.payload.code];
    },
    removeText(state) {
      state.textValue = "";
    },
  },
});

export default toolkitTextSlice.reducer;
export const { addText, removeText } = toolkitTextSlice.actions;
