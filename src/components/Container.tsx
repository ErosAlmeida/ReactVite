type ContainerProps = {

    children: React.ReactNode;
}

export function Container({children} : ContainerProps){
<div className="container">
         <div className="content">
            <section>{children}</section>
         </div>
      </div>
}