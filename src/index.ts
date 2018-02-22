declare module 'react-branch-hoc' {
  type ComponentType<P> = ((props: P) => JSX.Element) | React.ComponentClass<P>
  type PredicateType<P> = (props: P) => boolean

  export default function branch<P>(
    test: PredicateType<P>,
    ifTrueComponent: ComponentType<P>
  ): (ifFalseComponent: ComponentType<P>) => ComponentType<P>
}
