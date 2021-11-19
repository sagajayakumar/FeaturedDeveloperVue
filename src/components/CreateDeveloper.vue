<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Create Developer</h4>
                        </div>
                        <div class="card-body">
                            <form action=createDeveloper method="POST">
                                <div class="form-group">
                                    <label for="name">Developer ID</label>
                                    <input type="text" class="form-control" id="id" name="id" placeholder="Developer ID">
                                </div>
                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" class="form-control" id="name" name="name" placeholder="Name">
                                </div>
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" class="form-control" id="email" name="email" placeholder="Email">
                                </div>
                                <div class="form-group">
                                    <label for="goals">Goals</label>
                                    <input type="goals" class="form-control" id="goals" name="goals" placeholder="goals">
                                </div>
                                <div class="form-group">
                                    <label for="Skills">Skills</label>
                                    <input type="Skills" class="form-control" id="Skills" name="Skills" placeholder="Skills">
                                </div>
                                 <div class="form-group">
                                    <label for="linkedin">linkedIn URL</label>
                                    <input type="linkedin" class="form-control" id="linkedin" name="linkedin" placeholder="linkedin URL">
                                </div>
                                 <div class="form-group">
                                    <label for="Git">Git URL</label>
                                    <input type="Git" class="form-control" id="Git" name="linkedin" placeholder="Git URL">
                                </div>
                                  <div class="form-group">
                                    <label for="Image">Image URL</label>
                                    <input type="Image" class="form-control" id="Image" name="Image" placeholder="Image URL">
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: "createDeveloper",
   methods: {
    async developers() {
      await this.$axios
        .post(`https://localhost:44312/api/developer`)
        //.get(`https://featureddeveloperapis.herokuapp.com/api/DeveloperofTheDay`)
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            this.data = res;
            console.log(this.data.data.length + " is the length");
          }
        });
    },
  },
 },
)
</script>
