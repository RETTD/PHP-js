import { Icon } from "rsuite";

const Header = () => {
  return (
    <div>
    <div className="header">
      {" "}
      <div className="title">Nauka słówek z języka angielskiego</div>
      <Icon style={{marginTop: 15}} size='5x' icon="mortar-board" />
    </div>
    <style jsx>
      {`
      .header {
        background-color: #eee9da;
        min-height: 100px;
        max-height: 200px;
        display: flex;
        justify-content: center;
        border-bottom: 1px solid #808080;
      }
      .title{
        margin-top: 25px;
        font-size: 25px;
        margin-right: 50px;
      }
      `}
    </style>
    </div>
  );
};
export default Header;
