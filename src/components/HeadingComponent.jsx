// so far we created React Components as functions
// ...but if we want a very powerful component with even more features,
// consider also the second way of creating a Component: the class shape

const HeadingComponent = (props) => {
  // imagine props like this:
  // {
  //     h1content: 'whatever',
  //     subtitle: 'whatever',
  //     customClass: 'whatever'
  // }
  // props is an OBJECT!
  return (
    <div className={props.customClass || 'my-div'}>
      <h1>{props.h1content}</h1>
      <h3>{props.subtitle}</h3>
    </div>
  )
}

export default HeadingComponent

// what if I want to re-use this component, but with a different title?
// or a different class on the div?

// I can use the PROPS

// more modern way of writing HeadingComponent

// if your ARROW FUNCTION just returns a value,
// you can skip the return statement and the curly brackets altogether

// you can destructure the props object into its individual props!

// const HeadingComponent = ({ customClass, h1content, subtitle }) => (
//   <div className={customClass || 'my-div'}>
//     <h1>{h1content}</h1>
//     <h3>{subtitle}</h3>
//   </div>
// )
