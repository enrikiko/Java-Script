n=0
for run in {1..30}
do
  name="fp-"$run
  sh fp.sh $name
  n=$((n+1))
done
