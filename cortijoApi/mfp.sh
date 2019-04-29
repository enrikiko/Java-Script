n=0
for run in {1..10}
do
  name="fp-"$n
  sh fp.sh $name
  n=$((n+1))
done
