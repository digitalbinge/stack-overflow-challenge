import React from 'react';
import stackOverflowData from '../data';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Badge, Row, Col, Table } from 'reactstrap';

export default class QuestionList extends React.Component {
  render() {
    return (
    	<Row>
		    {stackOverflowData.top_questions.map((item) => (
			  	<Col lg="12">
			      <ListGroup>
					    <ListGroupItem>
				      	<Row>
				      		<Col lg="3">
				      			<Table size="sm">
	      			        <thead>
	      			          <tr>
	      			            <th>votes</th>
	      			            <th>answers</th>
	      			            <th>views</th>
	      			          </tr>
	      			        </thead>
	      			        <tbody>
	      			          <tr>
	      			            <td>{item.votes}</td>
	      			            <td>{item.answers}</td>
	      			            <td>{item.views}</td>
	      			          </tr>
	      			        </tbody>
	      			      </Table>
					    		</Col>
					    		<Col lg="6">
						      		<ListGroupItemHeading>{item.title}</ListGroupItemHeading>
						      		<ListGroupItemHeading>{item.tags.map((tag) => (<Badge>{tag}</Badge>))}</ListGroupItemHeading>
					    		</Col>					    		
					    		<Col lg="3">
						      		<ListGroupItemText>{item.author} asked {item.asked}</ListGroupItemText>
					    		</Col>
			    			</Row>
					    </ListGroupItem>
			    	</ListGroup>
			    </Col>
		    ))}
      </Row>
    );
  }
}

