import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RelatedBlog from '../../widgets/Blog/RelatedBlog';
import Pageheading from '../../widgets/Pageheading';

class BlogSingle extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
    render() {
        return (
          <div>
          {/*page title start*/}
          <Pageheading foldername={"Blog"} title={"Blog Single"} />
          {/*page title end*/}
          {/*body content start*/}
          <div id="main-page" className="page-content">
            {/*blog start*/}
            <section>
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="post">
                      <div className="post-image">
                        <img className="img-fluid w-100" src={require(`../../assets/images/blog/large/01.jpg`)} alt="" />
                      </div>
                      <div className="post-desc pl-0">
                        <div className="post-meta">
                          <ul className="list-inline">
                            <li><Link to="/">Admin</Link>
                            </li>
                            <li>February 08, 2020</li>
                          </ul>
                        </div>
                        <div className="post-title">
                          <h2>These guide Designing work</h2>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p>Agencio discovering the source behind the filler In seeing a sample, you diminish the importance of the copy by lowering it to the same level as any other visual element. The text simply becomes another supporting role, serving to make other aspects more aesthetic. Instead of your design enhancing the meaning of the content, your content is enhancing</p>
                      <p className="ml-5 text-black">Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, The text simply becomes another supporting role, serving to make other aspects more aesthetic Instead of your design</p>
                      <p>Agencio discovering the source behind the filler In seeing a sample, you diminish the importance of the copy by lowering it to the same level as any other visual element. The text simply becomes another supporting role, serving to make other aspects more aesthetic. Instead of your design enhancing the meaning of the content, your content is enhancing</p>
                    </div>
                    <div className="post-tags">
                      <ul className="list-inline">
                        <li><Link to="/">Agency</Link>
                        </li>
                        <li><Link to="/">Portfolio</Link>
                        </li>
                        <li><Link to="/">Creative</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="p-4 my-5 box-shadow" style={{backgroundColor: 'rgba(244,77,133,0.050)' }} >
                      <RelatedBlog logoitems={2} />
                    </div>
                    <div className="media-holder">
                      <h3 className="title mb-5">All Comments</h3>
                      <div className="media mb-5">
                        <img className="img-fluid box-shadow mr-4" alt="image" src={require(`../../assets/images/thumbnail/01.jpg`)} />
                        <div className="media-body d-lg-flex align-items-center">
                          <div className="media-user">
                            <h6>Charlote Kerry</h6>  <span className="comment-date">08 January, 2020</span> 
                          </div>
                          <div className="media-comment">
                            <p>It's ironic that when the then-understood Latin was scrambled, it became as incomprehensible as Greek; the phrase 'it's Greek to me' and 'greeking' have common semantic roots!</p> <Link to="/" className="comment-reply">Reply</Link>
                          </div>
                        </div>
                      </div>
                      <div className="media mb-5">
                        <img className="img-fluid box-shadow mr-4" alt="image" src={require(`../../assets/images/thumbnail/02.jpg`)} />
                        <div className="media-body d-lg-flex align-items-center">
                          <div className="media-user">
                            <h6>Jesson Mart</h6>  <span className="comment-date">08 January, 2020</span> 
                          </div>
                          <div className="media-comment">
                            <p>May a cusstums offficer somewon nothing of a poison-filled. Until, from a twho, twho chaffinch may also pursue it, not even a lump. But as twho, as a tank</p> <Link to="/" className="comment-reply">Reply</Link>
                          </div>
                        </div>
                      </div>
                      <div className="media mb-5">
                        <img className="img-fluid box-shadow mr-4" alt="image" src={require(`../../assets/images/thumbnail/03.jpg`)} />
                        <div className="media-body d-lg-flex align-items-center">
                          <div className="media-user">
                            <h6>Miraul Avek</h6>  <span className="comment-date">08 January, 2020</span> 
                          </div>
                          <div className="media-comment">
                            <p>For specific projects, collaboration between copywriters and designers may be best, however, like Karen McGrane said, draft copy has a way of turning</p> <Link to="/" className="comment-reply">Reply</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="post-comments mt-5 theme-bg p-5">
                      <div className="section-title">
                        <h2 className="title">Leave A Comment</h2>
                      </div>
                      <form id="contact-form" method="post" action="contact.php">
                        <div id="formmessage" />
                        <div className="row">
                          <div className="form-group col-md-4">
                            <input id="form_name" type="text" name="name" className="form-control" placeholder="Name" required="required" data-error="Name is required." />
                            <div className="help-block with-errors" />
                          </div>
                          <div className="form-group col-md-4">
                            <input id="form_email" type="email" name="email" className="form-control" placeholder="Email" required="required" data-error="Valid email is required." />
                            <div className="help-block with-errors" />
                          </div>
                          <div className="form-group col-md-4">
                            <input id="form_subject" type="text" name="subject" className="form-control" placeholder="Subject" required="required" data-error="Subject is required." />
                            <div className="help-block with-errors" />
                          </div>
                          <div className="form-group mb-0 col-md-12">
                            <textarea id="form_message" name="message" className="form-control h-100" placeholder="Your Comment" rows={4} required="required" data-error="Please,leave us a message." defaultValue={""} />
                            <div className="help-block with-errors" />
                          </div>
                        </div>
                        <div className="row mt-5">
                          <div className="col">
                            <button className="btn btn-white"><span>Post Comment <i className="fas fa-long-arrow-alt-right ml-2" /></span>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*blog end*/}
          </div>
          {/*body content end*/}
        </div>
      );
    }
}

export default BlogSingle;