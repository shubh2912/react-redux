import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { latestNews, articleNews, latestGallery } from '../actions';
import { bindActionCreators } from 'redux';

//
import LatestNews from '../components/home/LatestNews';
import ArticleNews from '../components/home/ArticleNews';
import Gallery from '../components/home/GalleryNews';

class Home extends Component {

    componentDidMount() {
        this.props.latestNews();
        this.props.articleNews();
        this.props.latestGallery();
    }

    render() {
        return (
            <div>
                <hr />
                <Link style={{"color": "blue","font-style": "oblique","font-size": "20px","margin-left": "48%"}}to="/form">Form</Link>
                <LatestNews latest={this.props.myarticles.latest} />
                <ArticleNews article={this.props.myarticles.article} />
                <Gallery galData={this.props.gal.galdata} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        myarticles: state.article,
        gal: state.gallery
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        latestNews,
        articleNews,
        latestGallery
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);