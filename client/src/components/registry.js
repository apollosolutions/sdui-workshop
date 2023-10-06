import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

export const ComponentRegistryContext = createContext({
  registerComponent: () => {},
  getComponent: () => undefined,
});

export const ComponentRegistryProvider = ({
  initialRegistry = {},
  children,
}) => {
  const [registry, setRegistry] = useState(initialRegistry);

  const registerComponent = useCallback(
    (name, component) =>
      setRegistry({
        ...registry,
        [name]: component,
      }),
    []
  );

  const getComponent = useCallback((name) => registry[name], []);

  const componentRegistry = useMemo(
    () => ({
      registerComponent,
      getComponent,
    }),
    [registerComponent, getComponent]
  );

  return (
    <ComponentRegistryContext.Provider value={componentRegistry}>
      {children}
    </ComponentRegistryContext.Provider>
  );
};

export const useComponentRegistry = () => useContext(ComponentRegistryContext);

export const RegisteredComponent = ({ componentName, componentProps }) => {
  const { getComponent } = useComponentRegistry();

  const Component = getComponent(componentName);

  if (Component) {
    return <Component {...componentProps} />;
  } else {
    console.log(`Component ${componentName} has not been registered.`);
    return null;
  }
};

export const GQLComponent = ({
  componentQuery,
  componentRoot,
  typename = "__typename",
}) => {
  const { data, error, loading } = componentQuery;

  if (data) console.log(data);

  if (loading) {
    console.log("Loading...");
    return <>Loading</>;
  }

  if (error) {
    console.error(error);
    return <>Error!</>;
  }

  const components = Array.isArray(data[componentRoot])
    ? data[componentRoot]
    : [data[componentRoot]];

  return (
    <>
      {components ? (
        components.map(({ [typename]: componentName, ...componentProps }) => (
          <RegisteredComponent
            componentName={componentName}
            componentProps={componentProps}
          />
        ))
      ) : (
        <></>
      )}
    </>
  );
};