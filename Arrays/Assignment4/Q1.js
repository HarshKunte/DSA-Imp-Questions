function findCommon(ar1, ar2, ar3, n1, n2, n3)
	{
        let res = []
		var i = 0,
		j = 0,
		k = 0;

		while (i < n1 && j < n2 && k < n3)
		{
		
		if (ar1[i] == ar2[j] && ar2[j] == ar3[k])
		{
			res.push(ar1[i]);
			i++;
			j++;
			k++;
		}
		else if (ar1[i] < ar2[j]) i++;
		
		else if (ar2[j] < ar3[k]) j++;
		
		else k++;
		}
        return res
	}

