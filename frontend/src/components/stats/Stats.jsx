import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { apiGet } from "@/lib/api";

export function Stats({ name, titre }) {
  const [total, setTotal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiGet(`/${name}`)
      .then((data) => setTotal(data[0]?.total ?? 0)) // avec ta version actuelle : data[0].total
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [name]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium">{titre}</CardTitle>
      </CardHeader>
      <CardContent>
        {loading && <p className="text-muted-foreground">Chargement...</p>}
        {error && <p className="text-destructive">Erreur : {error}</p>}
        {!loading && !error && (
          <p className="text-2xl font-bold">
            {(total ?? 0).toLocaleString("fr-FR")}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
