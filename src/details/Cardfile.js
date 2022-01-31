import React from 'react';
import { Card, Avatar, Button } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, StarOutlined } from '@ant-design/icons';
import { Row, Col } from 'reactstrap'
const { Meta } = Card;


function Cardfile({ jobFromData, priceFromData, ratingFromData, descriptionFromData, calcSet }) {
  return (
    <Card
      style={{ width: 300, height: 'fit-content' }}
      cover={
        <div className='carding' style={{ display: "flex"}}>
          <>
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              width="250"
            />
          </>
        </div>
      }

    >
      <Row>
        <Col>
          <h6><b>{jobFromData}</b></h6>
        </Col>

        <Col lg={12}>
          <Row>{priceFromData}</Row>
          <Col>
          <Row> <div className='rating' style={{ color: "green", fontSize: "1rem",marginLeft:"-7.5rem" }}><StarOutlined style={{marginTop: "1rem",
    position: "absolute"}}/><b style={{position:"relative",marginLeft:"2rem"}}>{ratingFromData}</b></div></Row></Col>
          <Row> <p><h6><b>Descriptions</b></h6></p>{descriptionFromData}</Row>
        </Col>
        <Col style={{ margineLeft: "4rem", display: "flex" }}>

          <Button style={{ display: "inline" }} type='primary'>-</Button>


          <Button style={{
            height: "2rem",
            display: "content",
            alignItems: "center",
            justifyContent: "space-around",
            // width: "-webkit-fill-available"
          }}
            type='primary' ghost>add</Button>


          <Button onClick={()=>{calcSet(jobFromData, priceFromData, ratingFromData, descriptionFromData,)}} style={{ display: "inline" }} type="primary">+</Button>




        </Col>





      </Row>
      {/* <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="Card title"
      description="This is the description"
    /> */}
    </Card>
  );
}

export default Cardfile;