import React from 'react';
import { Row, Col } from 'antd';
import s from './ProfileInfo.module.scss';

export const ProfileInfo = () => {
    return (
        <Row justify="center">
            <Col md={4} className={s.profile__img__container}>
                <img
                    className={s.profile__img}
                    alt="example"
                    src="https://www.petplace.com/static/d4eb1d31d9e22d830a0097e3e8dcdf3d/0979f/AdobeStock_142438416.jpg"
                />
            </Col>
            <Col md={6}>
                <Row>
                    <Col>
                        <h3>nike</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <h3>769 posts</h3>
                    </Col>
                    <Col md={6}>
                        <h3>113m followers</h3>
                    </Col>
                    <Col md={5}>
                        <h3>54 following</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={24}>
                        <h3>If you have a body, you are an athlete.</h3>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};
