import React from 'react'
import '/Users/sammitafoya/SoloTraveler/src/css/text.css'

class Blog extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>MY FEED</h1>
        </div>

        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" id="posts-tab" data-toggle="tab" href="#posts" role="tab"
                aria-controls="posts" aria-selected="true">Make
            a publication</a>
            </li>
          </ul>
        </div>

        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="posts" role="tabpanel" aria-labelledby="posts-tab">
            <div class="form-group">
              <label class="sr-only" for="message">post</label>
              <textarea class="form-control" id="message" rows="3"
                placeholder="What are you thinking?"></textarea>
            </div>

          </div>

          <div class="btn-toolbar justify-content-between">
            <div class="btn-group">
              <button type="submit" class="btn btn-primary">share</button>
            </div>
          </div>
        </div>

        <div class="card-header">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="mr-2">
                            <img class="rounded-circle" width="45" src="https://picsum.photos/50/50" alt=""></img>
                        </div>
                        <div class="ml-2">
                            <div class="h5 m-0">@samtafoya</div>
                            <div class="h7 text-muted">Sammi Tafoya</div>
                        </div>
                    </div>
                    <div>
                        <div class="dropdown">
                            <button class="btn btn-link dropdown-toggle" type="button" id="gedf-drop1"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fa fa-ellipsis-h"></i>
                            </button>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
                                <div class="h6 dropdown-header">Actions</div>
                                <a class="dropdown-item" href="#">Save </a>
                                <a class="dropdown-item" href="#">Hide </a>
                                <a class="dropdown-item" href="#">Report</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card-body">
                <div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i>10 min ago</div>
                <a class="card-link" href="#">
                    <h5 class="card-title">This is the title of the post.</h5>
                </a>
                <p class="card-text">
                    This is the body of the post. whoohoo.
                </p>
            </div>

            <div class="card-footer">
                <a href="#" class="card-link"><i class="fa fa-gittip"></i> Like</a>
                <a href="#" class="card-link"><i class="fa fa-comment"></i> Comment</a>
                <a href="#" class="card-link"><i class="fa fa-mail-forward"></i> Share</a>
            </div>

      </div>
    );
  }
}
export default Blog