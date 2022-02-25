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
              
                <div class="form-group">
                  <label for="name">Developer ID</label>
                  <input
                    type="text"
                    class="form-control"
                    id="id"
                    name="id"
                    placeholder="Developer ID"
                    v-model="developerid"
                  />
                </div>
                <div class="form-group">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    v-model="fullname"
                  />
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    name="email"
                    placeholder="Email"
                    v-model="emailaddress"
                  />
                </div>
                <div class="form-group">
                  <label for="goals">Goals</label>
                  <input
                    type="goals"
                    class="form-control"
                    id="goals"
                    name="goals"
                    placeholder="goals"
                    v-model="goals"
                  />
                </div>
                <div class="form-group">
                  <label for="Skills">Skills</label>
                  <input
                    type="Skills"
                    class="form-control"
                    id="Skills"
                    name="Skills"
                    placeholder="Skills"
                    v-model="skills"
                  />
                </div>
                <div class="form-group">
                  <label for="linkedin">linkedIn URL</label>
                  <input
                    type="linkedin"
                    class="form-control"
                    id="linkedin"
                    name="linkedin"
                    placeholder="linkedin URL"
                  />
                </div>
                <div class="form-group">
                  <label for="Git">Git URL</label>
                  <input
                    type="Git"
                    class="form-control"
                    id="Git"
                    name="linkedin"
                    placeholder="Git URL"
                    v-model="githuburl"
                  />
                </div>
                <div class="form-group">
                  <label for="Image">Image URL</label>
                  <input
                    type="text"
                    class="form-control"
                    id="Image"
                    name="Image"
                    placeholder="Image URL"
                    v-model="developer.image"
                  />
                </div>
                <button type="submit" v-on:click="developers" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>