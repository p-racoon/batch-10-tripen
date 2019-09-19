import React from 'react';
import { Container } from 'react-bootstrap';
import './TimeLine.css';

const TimeLine = () => {
  return (
    <Container>
      <p className="timeline ">
        <div className="timeline-item">
          <div className="timeline-img" />
          <div className="timeline-content js--fadeInLeft">
            <h2>Title</h2>
            <div className="date">1 MAY 2016</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed
              nulla voluptatem recusandae dolor, nostrum excepturi amet in
              dolores. Alias, ullam.
            </p>
            <button className="bnt-more">More</button>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-img" />
          <div className="timeline-content timeline-card js--fadeInRight">
            <div className="timeline-img-header">
              <h2>Card Title</h2>
            </div>
            <div className="date">25 MAY 2016</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed
              nulla voluptatem recusandae dolor, nostrum excepturi amet in
              dolores. Alias, ullam.
            </p>
            <button className="bnt-more">More</button>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-img" />
          <div className="timeline-content js--fadeInLeft">
            <div className="date">3 JUN 2016</div>
            <h2>Quote</h2>
            <blockquote>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
              explicabo debitis omnis dolor iste fugit totam quasi inventore!
            </blockquote>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-img" />
          <div className="timeline-content js--fadeInRight">
            <h2>Title</h2>
            <div className="date">22 JUN 2016</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed
              nulla voluptatem recusandae dolor, nostrum excepturi amet in
              dolores. Alias, ullam.
            </p>
            <button className="bnt-more">More</button>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-img" />
          <div className="timeline-content timeline-card js--fadeInLeft">
            <div className="timeline-img-header">
              <h2>Card Title</h2>
            </div>
            <div className="date">10 JULY 2016</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed
              nulla voluptatem recusandae dolor, nostrum excepturi amet in
              dolores. Alias, ullam.
            </p>
            <button className="bnt-more">More</button>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-img" />
          <div className="timeline-content timeline-card js--fadeInRight">
            <div className="timeline-img-header">
              <h2>Card Title</h2>
            </div>
            <div className="date">30 JULY 2016</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed
              nulla voluptatem recusandae dolor, nostrum excepturi amet in
              dolores. Alias, ullam.
            </p>
            <button className="bnt-more">More</button>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-img" />
          <div className="timeline-content js--fadeInLeft">
            <div className="date">5 AUG 2016</div>
            <h2>Quote</h2>
            <blockquote>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
              explicabo debitis omnis dolor iste fugit totam quasi inventore!
            </blockquote>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-img" />
          <div className="timeline-content timeline-card js--fadeInRight">
            <div className="timeline-img-header">
              <h2>Card Title</h2>
            </div>
            <div className="date">19 AUG 2016</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed
              nulla voluptatem recusandae dolor, nostrum excepturi amet in
              dolores. Alias, ullam.
            </p>
            <button className="bnt-more">More</button>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-img" />
          <div className="timeline-content ">
            <div className="date">1 SEP 2016</div>
            <h2>Title</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed
              nulla voluptatem recusandae dolor, nostrum excepturi amet in
              dolores. Alias, ullam.
            </p>
            <button className="bnt-more">More</button>
          </div>
        </div>
      </p>
    </Container>
  );
};

export default TimeLine;
