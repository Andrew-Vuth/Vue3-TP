<template>
  <h2 class="page-header">Comments</h2>
  <div
    v-for="comment in comments"
    :key="comment.id"
    class="container comment-container"
  >
    <div class="row">
      <div class="col">
        <section class="comment-list">
          <!-- First Comment -->
          <article class="row">
            <div class="col-md-2 col-sm-2 hidden-xs">
              <figure class="thumbnail">
                <img
                  class="img-responsive"
                  src="http://www.tangoflooring.ca/wp-content/uploads/2015/07/user-avatar-placeholder.png"
                />
                <figcaption class="text-center">username</figcaption>
              </figure>
            </div>
            <div class="col-md-10 col-sm-10">
              <div class="panel panel-default arrow left">
                <div class="panel-body">
                  <header class="text-left">
                    <div class="comment-user">
                      <i class="fa fa-user"></i> {{ $store.state.user.name }}
                    </div>
                    <time class="comment-date"
                      ><i class="fa fa-clock-o"></i>
                      {{ comment.commentedAt }}</time
                    >
                  </header>
                  <div class="comment-post">
                    <p>
                      {{ comment.content }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      comments() {
        return this.$store.state.comments;
      },
    },
  };
</script>

<style scoped>
  @import url(//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css);
  /*Comment List styles*/
  .comment-container {
    width: 650px;
    max-width: 100%;
  }
  .comment-list .row {
    margin-bottom: 0px;
  }
  .comment-list .panel .panel-heading {
    padding: 4px 15px;
    position: absolute;
    border: none;
    /*Panel-heading border radius*/
    border-top-right-radius: 0px;
    top: 1px;
  }
  .comment-list .panel .panel-heading.right {
    border-right-width: 0px;
    /*Panel-heading border radius*/
    border-top-left-radius: 0px;
    right: 16px;
  }
  .comment-list .panel .panel-heading .panel-body {
    padding-top: 6px;
  }
  .comment-list figcaption {
    /*For wrapping text in thumbnail*/
    word-wrap: break-word;
  }
  /* Portrait tablets and medium desktops */
  @media (min-width: 768px) {
    .comment-list .arrow:after,
    .comment-list .arrow:before {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      border-style: solid;
      border-color: transparent;
    }
    .comment-list .panel.arrow.left:after,
    .comment-list .panel.arrow.left:before {
      border-left: 0;
    }
    /*****Left Arrow*****/
    /*Outline effect style*/
    .comment-list .panel.arrow.left:before {
      left: 0px;
      top: 30px;
      /*Use boarder color of panel*/
      border-right-color: inherit;
      border-width: 16px;
    }
    /*Background color effect*/
    .comment-list .panel.arrow.left:after {
      left: 1px;
      top: 31px;
      /*Change for different outline color*/
      border-right-color: #ffffff;
      border-width: 15px;
    }
    /*****Right Arrow*****/
    /*Outline effect style*/
    .comment-list .panel.arrow.right:before {
      right: -16px;
      top: 30px;
      /*Use boarder color of panel*/
      border-left-color: inherit;
      border-width: 16px;
    }
    /*Background color effect*/
    .comment-list .panel.arrow.right:after {
      right: -14px;
      top: 31px;
      /*Change for different outline color*/
      border-left-color: #ffffff;
      border-width: 15px;
    }
  }
  .comment-list .comment-post {
    margin-top: 6px;
    text-align: left;
  }
</style>
