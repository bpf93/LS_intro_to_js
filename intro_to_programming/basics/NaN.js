//To determine whether a value is NaN, you can't use the usual comparison operators in a simple way. As it happens, NaN is the only value in JavaScript that is not equal to itself:


> let value = NaN;
> value === NaN         // We'll talk about this in a few minutes
= false

> NaN === NaN
= false
//Instead, you should use either Number.isNaN or Object.is:


> let value = NaN;
> Number.isNaN(value)
= true

> Object.is(value, NaN)
= true