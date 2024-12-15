import React from 'react'

const withPolicyPage = (Component: React.FC) => {
  const Hoc = () => {
    const newProps = {}
    return <Component {...newProps} />
  }

  return Hoc
}
export default withPolicyPage
