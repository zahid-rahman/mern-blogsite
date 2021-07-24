import { ListGroup } from 'react-bootstrap'
import './CategorySidebar.css'

const CategorySidebar = () => {
    return (
        <ListGroup>
            <ListGroup.Item className="p-3 hover-effect" action variant="light">
                <a className="category-link" href="#">Category 1</a>
            </ListGroup.Item>
            <ListGroup.Item className="p-3 hover-effect" action variant="light">
                <a className="category-link" href="#">Category 2</a>
            </ListGroup.Item>
            <ListGroup.Item className="p-3 hover-effect" action variant="light">
                <a className="category-link" href="#">Category 3</a>
            </ListGroup.Item>
            <ListGroup.Item className="p-3 hover-effect" action variant="light">
                <a className="category-link" href="#">Category 4</a>
            </ListGroup.Item>
            <ListGroup.Item className="p-3 hover-effect" action variant="light">
                <a className="category-link" href="#">Category 5</a>
            </ListGroup.Item>
        </ListGroup>
    )
}

export default CategorySidebar;