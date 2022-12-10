import { useQueryGroups } from "../api/useQueryGroups"

export const Groups = () => {
  const { groupList } = useQueryGroups();

  console.log(groupList);
  return (
    <>
    
    </>
  );
};