const MyComponent = (props) => {
  const {children, bgColor, height} = props;

  return <div style={{
          background: bgColor,
          height: height + 'px'
  }}>
    <div>

  </div>
  <div>
    {children}
  </div>
  </div>
};
export default MyComponent;