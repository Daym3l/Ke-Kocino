import React from "react";
import Loading from "../../components/loading/m.loading";
import NotesContainer from "./subViews/Notes.container";
const DenseAppBar = React.lazy(()=>import("../../components/appbar/m.appbar"));

const NotesLayout = props => {
 

  return (
    <React.Suspense fallback={<Loading />}>
      <DenseAppBar {...props} />
      <NotesContainer/>
    </React.Suspense>
  );
};
export default NotesLayout;
