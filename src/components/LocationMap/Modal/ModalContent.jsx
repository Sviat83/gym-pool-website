import React from "react";
import { Link } from "react-router-dom";

const ModalContent = ({ onClose }) => {
    const handleLinkClick = () => {
        onClose();
    }
    return (
        <div>
            <ul>
                <li><Link to="gym" onClick={handleLinkClick}>Тренажерний зал</Link></li>
                <li><Link to="boxing" onClick={handleLinkClick}>Зона боксу</Link></li>
                <li><Link to="studios" onClick={handleLinkClick}>Студії групових та персональних програм</Link></li>
                <li><Link to="pilates" onClick={handleLinkClick}>Пілатес на реформерах</Link></li>
                <li><Link to="aquazone" onClick={handleLinkClick}>Аквазона: великий та малий басейни</Link></li>
                <li><Link to="spa" onClick={handleLinkClick}>Зона SPA</Link></li>
                <li><Link to="table-tennis" onClick={handleLinkClick}>Настільний теніс</Link></li>
            </ul>
        </div>
    );
};
export default ModalContent;