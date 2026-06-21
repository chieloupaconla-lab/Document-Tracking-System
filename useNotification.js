import { onSnapshot, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useEffect, useState } from "react";

export function useNotifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "documents"), (snap) => {
      const data = snap.docs.map(d => d.data());

      const newDocs = data.filter(d => d.status === "Pending");

      setNotifications(newDocs);
    });

    return () => unsub();
  }, []);

  return notifications;
}