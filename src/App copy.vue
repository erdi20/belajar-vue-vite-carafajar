<script>
import Student from "./components/Student.vue"
export default {
  components: {
    Student
  },
  data() {
    return {
      selectStudent: ''
    }
  },
  methods: {
    Showdata(a) {
      this.selectStudent = a
    }
  }
}
</script>

<template>
  <Student @response="Showdata" name="anii">nilai slot</Student>
  <br>
  <Student @response="Showdata" name="ria" />
  <br>
  <Student @response="Showdata" name="k" />

  <br>
  <p>
    yang dipilih adalah {{ selectStudent }}
  </p>
</template>
