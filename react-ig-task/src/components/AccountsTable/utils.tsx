import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./AccountsTable.module.css";

export const createSkeletonRows = (rowsNum: number) => {
  return Array(rowsNum)
    .fill(1)
    .map((_, i) => (
      <tr key={i} className={styles.table__row_skeleton}>
        <td>
          <Skeleton />
        </td>
        <td>
          <Skeleton />
        </td>
        <td>
          <Skeleton />
        </td>
      </tr>
    ));
};
