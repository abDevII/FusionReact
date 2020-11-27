import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dish: null
        }
    }

    renderDish(dish) {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>                        
            </div>
        );
    }

    renderComments(comments) {
        if (comments != null) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map((comment) => {
                        return (
                            <ul className="list-unstyled">
                                <li className="mb-3">{comment.comment}</li>
                                <li>-- {comment.author} , {new Date(comment.date).toDateString()}</li>
                            </ul>
                        );                            
                    })}                       
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    render() {
        if (this.props.dish != null) {
            return (
                <div key={this.props.dish.id} className="row">
                    {this.renderDish(this.props.dish)}
                    {this.renderComments(this.props.dish.comments)}
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }
} 

export default DishDetail;