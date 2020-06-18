import React , {Component } from "react"
import { Card, List, Modal } from 'antd/lib';
import s from "./Feed.module.css"

class Feed extends Component {
    state = {
        imagesUrl:[     
            {url: "https://images3.alphacoders.com/823/thumb-1920-82317.jpg", id: 1},
            {url: "https://www.muralsyourway.com/media/catalog/product/cache/1/base/1200x/040ec09b1e35df139433887a97daa66f/t/r/tropical-ocean-pier-mural-wallpaper.jpg", id: 2},
            {url: "https://d3e1m60ptf1oym.cloudfront.net/ee834972-e58f-11e2-a9b7-efe99de95c43/B13623-FR-01_uxga.jpg", id: 3},
            {url: "https://images6.alphacoders.com/402/402163.jpg", id: 4}, 
            {url: "https://www.wallpaperup.com/uploads/wallpapers/2018/09/04/1290625/d2c0849c1a6f17f28f923031d6d368bf.jpg", id: 5},
            {url: "https://images3.alphacoders.com/823/thumb-1920-82317.jpg", id: 6},
            {url: "https://www.muralsyourway.com/media/catalog/product/cache/1/base/1200x/040ec09b1e35df139433887a97daa66f/t/r/tropical-ocean-pier-mural-wallpaper.jpg", id: 7},
            {url: "https://d3e1m60ptf1oym.cloudfront.net/ee834972-e58f-11e2-a9b7-efe99de95c43/B13623-FR-01_uxga.jpg", id: 8},   
            {url: "https://images6.alphacoders.com/402/402163.jpg", id: 9},         
        ],
        users:[
            {url: "https://www.thelogomix.com/files/imagecache/v3-logo-detail/Nike.jpg", name: "JavaScrip", message: "I am your's father! Come to the dark side!"},
            {url: "https://www.thelogomix.com/files/imagecache/v3-logo-detail/Nike.jpg", name: "React", message: "To the moon!"},
            {url: "https://www.thelogomix.com/files/imagecache/v3-logo-detail/Nike.jpg", name: "Typescript", message: "Where are my types!?"},
        ],
        modalVisible: false,
        modal2Visible: false,
        imageUrl: "",
      };

      setModalVisible = ( modalVisible , imageUrl) => { 
          this.setState({ modalVisible, imageUrl });
          const element = document.querySelector("body");
          modalVisible 
          ? element.classList.add("hideScroll") 
          : element.classList.remove("hideScroll");
      }

      setModal2Visible(modal2Visible) {
        this.setState({ modal2Visible });
      }      

    render() {
        const {imagesUrl, users} = this.state
        
        return (
            <div className={s.container}> 
            <List
                grid={{
                gutter: 30,
                xs: 1,
                sm: 2,
                md: 3,
                lg: 3,
                xl: 3,
                xxl: 3,
                }}
                dataSource={imagesUrl}
                renderItem={(item, id) => (
                    <List.Item>
                        <Card bodyStyle={{padding: "0"}} key={id} cover={
                            <div className={s.img__wrap} >
                                <img className={s} alt="cardImg" src={item.url} id={item.id} key={id}/> 
                                <div className={s.img__description} onClick={() => this.setModalVisible(true, item.url)} >
                                    <span className={s.imgHoverLeft}>                                        
                                        <span><img className={s.imgHover} viewBox="0 0 48 48" alt="imgHover" src="https://i.ibb.co/X26JdDg/heart-Empty-Bg.png" id={item.id} key={id}/></span> 
                                        <span>17.5m</span>
                                    </span>
                                    <span>
                                        <span><img className={s.imgHover} viewBox="0 0 48 48" alt="imgHover" src="https://i.ibb.co/kcYbtvR/Instagram-UI-comment-512.png" id={item.id} key={id}/></span>                                     
                                        <span>8,089</span>
                                    </span> 
                                </div>
                            </div>                        
                        }></Card>
                    </List.Item>
                )}
            />
            <Modal
            centered
            visible={this.state.modalVisible}
            onOk={() => this.setModalVisible(false)}
            onCancel={() => this.setModalVisible(false)}
            footer={null}
            width={816}
            bodyStyle={{ padding: '0' }}
            closable={false}
            >            
            <div className={s.modalContainer}>
                <img className={s.modalImg} alt="modalImg" src={this.state.imageUrl}  />                 
                <div className={s.modalContext}>
                    <div className={s.modalComents}>                        
                        <div className={s.modalHeader}>
                            <div>
                                <img className={s.avatar} alt="cardImg" src="https://www.thelogomix.com/files/imagecache/v3-logo-detail/Nike.jpg"/>
                                <b>nike &nbsp;<img className={s.verified} src="https://i.ya-webdesign.com/images/instagram-verified-badge-png.png" alt="verified"></img> 
                                    <span>&nbsp; &#8226; &nbsp; </span>
                                    <a src="#">Follow</a>
                                </b>
                            </div>
                            <span type="primary" onClick={() => this.setModal2Visible(true)}><img className={s.burgermenu} src="https://static.thenounproject.com/png/756733-200.png" alt="burgermenu" /></span>                                                                                                             
                        </div>                        

                        {users.map( (u, index) => 
                            <div key={index}>
                                <span>                                    
                                    <div className={s.modalUserCard} >
                                        <span>
                                            <img className={s.avatar} alt="cardImg" src={u.url} key={u.id}/> 
                                        </span>                                            
                                        <span >
                                            <span className={s.flex}>
                                                <span><b>{u.name}</b> &nbsp; {u.message}</span>
                                                <svg aria-label="Like" className={s.svgLikeHeart} fill="#8e8e8e" height="12" viewBox="0 0 48 48" width="12"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                                        </span>
                                            <p>1d &nbsp;  1432 likes &nbsp; Reply</p>
                                            <a src="#">---- View replies(68)</a>
                                        </span>                                    
                                    </div>
                                </span>
                            </div>)
                        }                        
                    </div>

                    <hr></hr>

                    <div className={s.modalLikes}>
                        <span className={s.flex}>
                            <div>
                                <svg aria-label="Like" fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                                <svg aria-label="Comment" fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clipRule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fillRule="evenodd"></path></svg>
                                <svg aria-label="Share Post" fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
                            </div>
                            <div><svg aria-label="Save" fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg></div>
                        </span>   
                        <div className={s.modalLikesCount}>
                            <b>418,6364 likes</b>
                            <p>1 DAY AGO</p>
                        </div>
                        <div className={s.modalFooter}>
                            <textarea type="text" placeholder="Add a comment..." />
                            <button type="submit" className={s.postBtn}>Post</button>
                        </div>
                    </div>
                </div>  
            </div>
                <Modal
                    centered
                    visible={this.state.modal2Visible}
                    onOk={() => this.setModal2Visible(false)}
                    onCancel={() => this.setModal2Visible(false)}
                    footer={null}
                    closable={false}
                    width={400}
                    height={290}
                    bodyStyle={{ padding: '0', borderRadius: '14px'}}
                    zIndex={2000}
                >
                    <div className={s.secondModalContainer}>
                        <div className={s.secondModalWrapper}>
                            <button className={s.secondModalBtn}><b style={{color: "red"}}>Report Inappropriate</b></button>
                            <button className={s.secondModalBtn}>Go to post</button>
                            <button className={s.secondModalBtn}>Share</button>
                            <button className={s.secondModalBtn}>Copy Link</button>
                            <button className={s.secondModalBtn}>Emded</button>
                            <button className={s.secondModalBtn}>Cancel</button>
                        </div>
                    </div>
                </Modal>                                   
            </Modal>             
        </div>        
        )
    }
}

export default Feed;