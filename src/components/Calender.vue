<template>
  <div class="container mx-auto text-center bg-gray-300 py-8">
    <h1 class="font-semibold text-4xl">Vue Calender</h1>

    <section class="m-auto">
      <div class="flex justify-center my-8 font-extrabold text-2xl">
        <h2 class="mx-2">{{ currentMonthName }}</h2>
        <h2 class="mx-2">{{ currentYear }}</h2>
      </div>

      <div class="flex flex-wrap">
        <p
          class=" text-center py-3 font-bold"
          style="width: 14.28%"
          v-for="day in days"
          :key="day"
        >
          {{ day }}
        </p>
      </div>
      <div class="flex flex-wrap">
        <p
          class="text-center"
          style="width: 14.28%"
          v-for="num in startDay()"
          :key="num"
        ></p>
        <p
          class="text-center"
          style="width: 14.28%"
          v-for="num in daysInMonth()"
          :key="num"
          :class="currentDateClass(num)"
        >
          {{ num }}
        </p>
      </div>
    </section>

    <section class="mt-8">
      <button
        @click="previous"
        class="bg-red-600 mx-1 py-1 px-5 text-white outline-none hover:bg-red-500 focus:outline-none transition rounded-lg"
      >
        Prev
      </button>
      <button
        @click="next"
        class="bg-blue-600 mx-1 py-1 px-5 text-white outline-none hover:bg-blue-500 focus:outline-none transition rounded-lg"
      >
        Next
      </button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date().getUTCDate(),
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    };
  },

  methods: {
    daysInMonth() {
      return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    },
    startDay() {
      return new Date(this.currentYear, this.currentMonth, 1).getDay();
    },
    next() {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
    },
    previous() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
    },
    currentDateClass(num) {
      const calenderFullDate = new Date(
        this.currentYear,
        this.currentMonth,
        num
      ).toDateString;

      const currentFullDate = new Date().toDateString;

      if (calenderFullDate === currentFullDate) {
        return "font-bold text-yellow-900";
      }
    },
  },

  computed: {
    currentMonthName() {
      return new Date(
        this.currentYear,
        this.currentMonth
      ).toLocaleString("default", { month: "long" });
    },
  },
};
</script>

<style scoped></style>
