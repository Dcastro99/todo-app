import * as React from "react";
import ColumnLayout from "@cloudscape-design/components/column-layout";

export default function list() {
  return (
    <ColumnLayout borders="vertical" id="taskList">
      <div>Task 1</div>
      <div>Task 2</div>
      <div>Task 3</div>
    </ColumnLayout>
  );
}