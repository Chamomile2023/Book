import React from "react";
import "./Modal.scss";
import x from '../assets/x.svg'

const Modal = ({ data }) => {
  console.log(data);
  return <>
    <div className="modal">
      <div className="modal__hero">
        <div className="modal__overlay">
        </div>
        <div className="modal__basic">
          {data.map((item) => {
            return <>
              <div className="modal__header">
                <h5 className="modal__header--title">{item.volumeInfo.title}</h5>
                <img src={x} alt="" className="modal__header--img" />
              </div>
              <div className="modal__picture">
                <img src="" alt="" className="modal__picture--img" />
              </div>
              <div className="modal__text">
                <p className="modal__text--text">
                  Culpa nulla pariatur cupidatat nisi incididunt ea do ipsum. Incididunt quis mollit elit commodo cillum eiusmod reprehenderit labore irure. Cillum et incididunt et nostrud exercitation quis aute laboris non ut adipisicing. Laboris ad minim aute nulla proident deserunt velit anim sunt aliquip ut sit. Exercitation aliquip ullamco officia non aliqua. Sint deserunt aliquip veniam id eiusmod sit consectetur mollit ea aliqua officia consequat. Magna non mollit nisi est commodo voluptate aute id. Deserunt nostrud id do in nisi mollit deserunt non. Pariatur fugiat cillum irure elit sint nisi ad ipsum culpa deserunt cupidatat esse consequat laboris. Id aliquip non consectetur esse proident duis Lorem.
                </p>
              </div>
              <div className="modal__data">
                <ul className="modal__data--list">
                  <li className="modal__data--item">
                    <span className="modal__data--span">Author:</span>
                    <button className="modal__data--btn">Jamal Kasper</button>
                  </li>
                  <li className="modal__data--item">
                    <span className="modal__data--span">Published:</span>
                    <button className="modal__data--btn">2002</button>
                  </li>
                  <li className="modal__data--item">
                    <span className="modal__data--span">Publishers:</span>
                    <button className="modal__data--btn">Hollman</button>
                  </li>
                  <li className="modal__data--item">
                    <span className="modal__data--span">Categories:</span>
                    <button className="modal__data--btn">Computer</button>
                  </li>
                  <li className="modal__data--item">
                    <span className="modal__data--span">Pages Count:</span>
                    <button className="modal__data--btn">288</button>
                  </li>
                </ul>
              </div>
            </>
          })}
        </div>
      </div>
    </div>
  </>;
};

export default Modal;
