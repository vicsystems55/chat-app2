<template>
   <div id="page-container">

            <!-- Main Container -->
            <main id="main-container">
                <!-- Page Content -->
                <div class="bg-image" style="background-image: url('assets/media/photos/photo22@2x.jpg');">
                    <div class="row no-gutters bg-primary-op">
                        <!-- Main Section -->
                        <div class="hero-static col-md-6 d-flex align-items-center bg-white">
                            <div class="p-3 w-100">
                                <!-- Header -->
                                <div class="mb-3 text-center">
                                    <a class="link-fx font-w700 font-size-h1" href="index.html">
                                        <span class="text-dark">vic</span><span class="text-warning">Systems</span>
                                    </a>
                                    <p class="text-uppercase font-w700 font-size-sm text-muted">Sign Up</p>
                                </div>
                                <!-- END Header -->

                                <!-- Sign In Form -->
                                <!-- jQuery Validation (.js-validation-signin class is initialized in js/pages/op_auth_signin.min.js which was auto compiled from _js/pages/op_auth_signin.js) -->
                                <!-- For more info and examples you can check out https://github.com/jzaefferer/jquery-validation -->
                                <div class="row no-gutters justify-content-center">
                                    <div class="col-sm-8 col-xl-6">
                                       <Form @submit="signup">
                                            <div class="py-3">
                                                <div class="form-group">
                                                    <Field type="text" class="form-control form-control-lg form-control-alt" id="login-username" name="name" rules="required" placeholder="Fullname"/>
                                                     <span class="text-danger"><ErrorMessage name="name" /></span>
                                                </div>
                                                <div class="form-group input-group">
                                                   
                                                    <Field type="text" class="form-control form-control-lg form-control-alt" id="login-username" name="email" :rules="validateEmail" placeholder="Email"/>
                                                     
                                                     <span class="text-danger"><ErrorMessage name="email" /></span>
                                                </div>
                                                <div class="form-group input-group">
                                                    <Field type="password" class="form-control form-control-lg form-control-alt" id="login-password" name="password" placeholder="Password"/>
                                                     <div class="input-group-prepend">
                                                        <span class="input-group-text" id=""><i class="far fa-eye"></i></span>
                                                    </div> <br>
                                                    <span class="text-danger"><ErrorMessage name="password" /></span>
                                                </div>
                                                <div class="form-group">
                                                    <input  type="password" class="form-control form-control-lg form-control-alt" id="login-password" placeholder="confirm Password">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <button  class="btn btn-block btn-hero-lg btn-hero-warning">
                                                    <i class="fa fa-fw fa-sign-in-alt mr-1"></i> 
                                                    Sign In <span>&nbsp</span>
                                                    <div v-if="loading" style="height: 20px; width: 20px;" class="float-right spinner-border text-primary" >
                                                      
                                                    </div>
                                                </button>
                                                <p class="mt-3 mb-0 d-lg-flex justify-content-lg-between">
                                                    <router-link class="btn btn-sm btn-light d-block d-lg-inline-block mb-1" to="/forgot-password">
                                                        <i class="fa fa-exclamation-triangle text-muted mr-1"></i> Forgot password
                                                    </router-link>
                                                    <router-link  class="btn btn-sm btn-light d-block d-lg-inline-block mb-1" to="/login">
                                                        <i class="fa fa-plus text-muted mr-1"></i> Sign In 
                                                    </router-link>
                                                   
                                                </p>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                                <!-- END Sign In Form -->
                            </div>
                        </div>
                        <!-- END Main Section -->

                        <!-- Meta Info Section -->
                        <div class="hero-static col-md-6 d-none d-md-flex align-items-md-center justify-content-md-center text-md-center">
                            <div class="p-3">
                                <p class="display-4 font-w700 text-white mb-3">
                                    Welcome to the future
                                </p>
                                <p @click="signup" class="font-size-lg font-w600 text-white-75 mb-0">
                                    Copyright &copy; <span data-toggle="year-copy"></span>
                                </p>
                            </div>
                        </div>
                        <!-- END Meta Info Section -->
                    </div>
                </div>
                <!-- END Page Content -->
            </main>
            <!-- END Main Container -->
        </div>
</template>

<script>
 import { useToast } from "vue-toastification";
import { Form, Field, ErrorMessage } from 'vee-validate';

export default {
    setup() {
      // Get toast interface
      const toast = useToast();

    //   // Use it!
    //   toast("I'm a toast!");

    //   // or with options
    //   toast.success("My toast content", {
    //     timeout: 2000
    //   });
      // These options will override the options defined in the "app.use" plugin registration for this specific toast

      // Make it available inside methods
      return { toast }
    },
  name: 'HelloWorld',
    components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
      return {
          name: '',
          email: '',
          password: '',
          loading: false,
          
      }
  },
  props: {
    msg: String
  },
  methods: {

      
      signup(values) {

             this.loading = true;

             this.$store.dispatch('signIn', { 
                    name: values.name,
                    email: values.email,
                    password: values.password
                  }).then(() => {
                    this.loading = true,
                    this.$router.push('/chat')
                    this.toast.success("You're In");
                }).catch((e)=>{
                    console.log(e.response.data.message)
                    this.toast.error(e.response.data.message);
                })

// this.toast.info("I'm an info toast!");

        //  this.axios.post(process.env.VUE_APP_URL+'/api/register', {
        //                 name: values.name,
        //                 email: values.email,
        //                 password: values.password,
        //             })
        //             .then(response => {

        //                 // save token in localstorage

        //                 // localStorage.setItem('token', response.data.token);

        //                 // redirect to user home
                
        //                 // this.toast.success("I'm in");

        //                 this.loading = false,
        //                 this.$router.push('/chat')
        //                  this.toast.success("I'm in!");
        //             }).catch(error => {
        //                 // this.toast.eror("oops! an error")
        //               console.log(error.response)

        //             //   this.toast.info("I'm an info toast!");
        //         });
          
             
            },
    validateEmail(value) {
      // if the field is empty
      if (!value) {
        return 'This field is required';
      }
      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return 'This field must be a valid email';
      }
      // All is good
      return true;
    },
  },
  mounted() {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

